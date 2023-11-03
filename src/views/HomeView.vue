<template>
  <header>
    <div class="container">
      <h1>LOGO</h1>
      <h3>Daily routine</h3>
    </div>
  </header>
  <main class="">
    <div class="container">
      <div class="data-area">
        <p v-if="filter === 'favorites'">
          Toplam {{ myDailyTodos.favoriteCount }} kayit var
        </p>
        <p v-if="filter === 'all'">
          Toplam {{ myDailyTodos.totalCount }} kayit var
        </p>

        <div>
          <button @click="filter = 'all'">Her Günler</button>
          <button @click="filter = 'favorites'">Beyendiyim Ish Günleri</button>
        </div>
      </div>

      <p v-if="filter === 'all'">Bütün günlük gordüyüm ishler</p>
      <div
        class="gunluk-listesi"
        v-for="myTodo in myDailyTodos.daily"
        v-if="filter === 'all'"
      >
        <tagTodoDetails :todo="myTodo"></tagTodoDetails>
      </div>

      <p v-if="filter === 'favorites'">Beyenerek gördüyüm ishler</p>
      <div
        class="gunluk-listesi"
        v-for="myTodo in myDailyTodos.favorites"
        v-if="filter === 'favorites'"
      >
        <tagTodoDetails :todo="myTodo"></tagTodoDetails>
      </div>
    </div>
  </main>
</template>

<script>
import { useDailyStore } from '@/stores/counter.js';
import todoDetails from '@/components/todoDetails.vue';
import { ref } from 'vue';

export default {
  components: {
    tagTodoDetails: todoDetails,
  },
  setup() {
    const myDailyTodos = useDailyStore();

    const filter = ref('all');

    return { myDailyTodos, filter };
  },
};
</script>
