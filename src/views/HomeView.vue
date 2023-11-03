<template>
  <header>
    <div class="container">
      <h1>LOGO</h1>
      <h3>Daily routine</h3>
    </div>
  </header>
  <main class="">
    <div class="container">
      <tagNewTodo></tagNewTodo>

      <div class="data-area">
        <h4 v-if="filter === 'favorites'" class="count-box">
          Toplam
          <p class="counts">
            {{ myAllTodos.favoriteCount }}
          </p>
          kayit var
        </h4>
        <h4 v-if="filter === 'all'" class="count-box">
          Toplam
          <p class="counts">{{ myAllTodos.totalCount }}</p>
          kayit var
        </h4>

        <div>
          <button @click="filter = 'all'">Her Günler</button>
          <button @click="filter = 'favorites'">Beyendiyim Ish Günleri</button>
        </div>
      </div>

      <p v-if="filter === 'all'">Bütün günlük gordüyüm ishler</p>
      <div
        class="gunluk-listesi"
        v-for="myTodo in myAllTodos.daily"
        v-if="filter === 'all'"
      >
        <tagTodoDetails :todo="myTodo"></tagTodoDetails>
      </div>

      <p v-if="filter === 'favorites'">Beyenerek gördüyüm ishler</p>
      <div
        class="gunluk-listesi"
        v-for="myTodo in myAllTodos.favorites"
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
import NewTodo from '@/components/newTodo.vue';
import { ref } from 'vue';

export default {
  components: {
    tagTodoDetails: todoDetails,
    tagNewTodo: NewTodo,
  },
  setup() {
    const myAllTodos = useDailyStore();

    const filter = ref('all');

    return { myAllTodos, filter };
  },
};
</script>
