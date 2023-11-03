<template>
  <header>
    <div class="container">
      <h1>LOGO</h1>
      <h3>Daily routine</h3>
    </div>
  </header>
  <main>
    <div class="container">
      <div class="gunluk-listesi" v-for="myTodo in myDailyTodos.daily">
        <tagTodoDetails :todo="myTodo"></tagTodoDetails>
      </div>
    </div>
  </main>
</template>

<script>
import { useDailyStore } from '@/stores/counter.js';
import todoDetails from '@/components/todoDetails.vue';
export default {
  components: {
    tagTodoDetails: todoDetails,
  },
  setup() {
    const myDailyTodos = useDailyStore();
    return { myDailyTodos };
  },
};
</script>
