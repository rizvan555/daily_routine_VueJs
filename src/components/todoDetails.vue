<template>
  <div class="box">
    <div>
      <p>{{ todo.diary }}</p>
      <small class="date">{{ todo.date }}</small>
    </div>
    <div>
      <i class="material-icons" @click="allTodos.toggleFavorites(todo.id)"
        >favorite</i
      >
      <i class="material-icons" @click="allTodos.deleteTodoById(todo.id)"
        >delete</i
      >
    </div>
  </div>
</template>

<script>
import { useDailyStore } from '../stores/counter';

export default {
  props: ['todo'],
  setup() {
    const allTodos = useDailyStore();
    return { allTodos };
  },
};
</script>
