<template>
  <v-form>
    <v-radio-group
        v-model="quiz.likeCats"
        :error-messages="likeCatsErrors"
        required
        column
        @input="$v.likeCats.$touch()"
        @blur="$v.likeCats.$touch()"
    >
      <template v-slot:label>
        <div>Do you like cats?</div>
      </template>
      <v-radio
          label="Yes"
          :value="true"
      ></v-radio>
      <v-radio
          label="No"
          :value="false"
      ></v-radio>
    </v-radio-group>

    <v-text-field
        v-model="quiz.firstName"
        label="First name"
        placeholder="Input your first name"
        :error-messages="firstNameErrors"
        required
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
    ></v-text-field>

    <v-text-field
        v-model="quiz.lastName"
        label="Last name"
        placeholder="Input your last name"
        :error-messages="lastNameErrors"
        @input="$v.lastName.$touch()"
        @blur="$v.lastName.$touch()"
    ></v-text-field>

    <v-menu
        ref="menu"
        v-model="birthdayMenu"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        min-width="auto"
        @input="$v.firstName.$touch()"
        @blur="$v.firstName.$touch()"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
            v-model="quiz.birthday"
            :error-messages="birthdayErrors"
            label="Birthday date"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
          ref="picker"
          v-model="quiz.birthday"
          :max="new Date().toISOString().substr(0, 10)"
          min="1950-01-01"
      ></v-date-picker>
    </v-menu>

    <v-text-field
        v-model="quiz.email"
        label="Email"
        type="email"
        :error-messages="emailErrors"
        required
        placeholder="Input email"
    ></v-text-field>

    <v-text-field
        v-model="quiz.password"
        label="Password"
        type="password"
        :error-messages="passwordErrors"
        required
        placeholder="Input password"
    ></v-text-field>

    <v-file-input
        accept="image/jpeg"
        label="Upload a cat photo"
        :error-messages="uploadPhotoErrors"
    ></v-file-input>
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

  </v-form>
</template>

<script>
import {validationMixin} from "vuelidate";
import {email, required} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    likeCats: { required },
    firstName: { required },
    lastName: {},
    birthday: {},
    email: { required, email },
    password: { required },
  },
  name: "QuizForm",
  props: ['value'],
  data() {
    return {
      quiz: {...this.value},
      birthdayMenu: false,
    }
  },
  methods: {
    save() {
      this.$v.$touch();
      this.$v.$anyError && this.$store.dispatch('quiz/save', this.quiz);
      this.$router.push({name: 'quiz-list'});
    },
    reset() {
      this.$v.$reset()
      this.quiz = {...this.value};
      this.birthdayMenu = false;
    },
  },
  computed: {
    likeCatsErrors () {
      const errors = []
      if (!this.$v.likeCats.$dirty) return errors;
      !this.quiz.likeCats && errors.push('The answer is required');
      return errors;
    },
    firstNameErrors () {
      const errors = []
      if (!this.$v.firstName.$dirty) return errors;
      !this.quiz.firstName.length && errors.push('First name is required');
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      return errors;
    },
    birthdayErrors() {
      const errors = [];
      if (!this.$v.birthday.$dirty) return errors;
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.quiz.email.length && errors.push('E-mail is required');
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.quiz.password.length && errors.push('Password is required');
      return errors;
    },
    uploadPhotoErrors() {
      return [];
    }
  },
  watch: {
    birthdayMenu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    },
    quiz(v) {
      this.$emit('input', v);
    },
    value(v) {
      this.quiz = {...v};
    }
  }

}
</script>