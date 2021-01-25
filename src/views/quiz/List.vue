<template>
  <v-container>
    <v-simple-table>
      <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">
            ФИО
          </th>
          <th class="text-left">
            Результат
          </th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr
            v-for="quiz in quizzes"
            :key="quiz.email"
        >
          <td>{{ quiz.firstName }} {{ quiz.lastName }}</td>
          <td>{{ quiz.likeCats ? 'Да' : 'Нет' }}</td>
          <td class="text-right">
            <v-btn @click="activeEdit(quiz)" color="primary"> Edit</v-btn>
          </td>
        </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog
        v-model="edit.active"
        persistent
        max-width="600px"
    >
      <v-card>
        <quiz-form v-if="edit.active" v-model="edit.quiz"></quiz-form>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";
import QuizForm from "../../components/QuizForm.vue";

export default {
  name: 'ViewQuizList',
  components: {QuizForm},
  data() {
    return {
      edit: {
        active: false,
        quiz: null
      }
    }
  },
  computed: {
    ...mapGetters({
      quizzes: 'quiz/list',
    })
  },
  methods: {
    activeEdit(quiz) {
      this.edit.quiz = quiz;
      this.edit.active = true;
    }
  }
}
</script>
