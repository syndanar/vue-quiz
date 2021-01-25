<template>
  <div>
    <v-container>
      <quiz-form v-model="quiz"></quiz-form>
      <v-btn
          rounded
          color="primary"
          dark
          @click="save"
      >
        Сохранить
      </v-btn>

      <v-btn
          rounded
          color="secondary"
          dark
          @click="reset"
      >
        Очистить
      </v-btn>
    </v-container>
  </div>
</template>

<script>
import QuizForm from "../../components/QuizForm.vue";

export default {
  name: 'ViewQuizAdd',
  components: { QuizForm },
  data() {
    return {
      quiz: {
        likeCats: true,
        firstName: "",
        lastName: "",
        birthday: "",
        email: "",
        password: "",
      }
    }
  },
  mounted() {
    this.$eventsHub.on('quiz-form-saved', () => {
      console.log('bus on');
      this.$router.push({name: 'quiz-list' });
    })
  },
  methods: {
    save() {
      this.$eventsHub.emit('quiz-form-save');
    },
    reset() {
      this.$eventsHub.emit('quiz-form-reset');
    }
  }
}
</script>
