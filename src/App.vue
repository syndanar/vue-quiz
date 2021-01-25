<template>
  <v-app>
    <v-app-bar app>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
            text
            exact
            v-for="route in routes"
            :key="route.name"
            :to="route.path">
          <v-icon
              v-if="route.icon"
              dark
              left
          >
            {{route.icon}}
          </v-icon>
          {{ route.title }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      routes: []
    }
  },
  created() {
    this.fillRoutes('/', this.$router.options.routes);
  },
  methods: {
    makePath() {
      return '/' + Array
          .from(arguments)
          .reduce((path, arg) => { return path.concat(arg.split('/')) }, [])
          .filter(arg => arg)
          .join('/');
    },
    fillRoutes(path, options) {
      options.forEach(opt => {
        if(Object.prototype.hasOwnProperty.call(opt, 'meta') && Object.prototype.hasOwnProperty.call(opt.meta, 'nav')) {
          this.routes.push({
            name: opt.name,
            path: this.makePath(path, opt.path),
            title: opt.meta.nav.title,
            icon: opt.meta.nav.icon
          });
        }
        if(Object.prototype.hasOwnProperty.call(opt, 'children')) {
          this.fillRoutes(this.makePath(path, opt.path), opt.children);
        }
      });
    }
  }
}
</script>
