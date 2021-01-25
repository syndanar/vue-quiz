<template>
  <div>
    <v-container>
      <quiz-form v-model="quiz"></quiz-form>
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
        firstName: "Max",
        lastName: "",
        birthday: "",
        email: "mm@mail.ru",
        password: "1111",
      }
    }
  },
}
</script>
