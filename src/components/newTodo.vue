<template>
  <form @submit.prevent="sendForm">
    <div class="box">
      <div class="form-group">
        <textarea
          v-model="valueNewTodo"
          placeholder="Yeniliyi elave et"
        ></textarea>
        <button>Günlüyü elave et</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useDailyStore } from '../stores/counter';

export default {
  setup() {
    const myAllTodos = useDailyStore();
    const valueNewTodo = ref('');

    const currentDate = () => {
      const current = new Date();
      const date =
        current.getDate() +
        '.' +
        (current.getMonth() + 1) +
        '.' +
        current.getFullYear();
      return date;
    };

    const sendForm = () => {
      if (valueNewTodo.value !== '') {
        myAllTodos.addNewTodo({
          id: myAllTodos.daily.length,
          diary: valueNewTodo.value,
          date: currentDate(),
          isFavorite: false,
        });
        valueNewTodo.value = '';
      }
    };
    return { myAllTodos, valueNewTodo, sendForm };
  },
};
</script>
