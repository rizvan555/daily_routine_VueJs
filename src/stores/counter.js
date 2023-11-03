import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useDailyStore = defineStore('dailyStore', {
  state: () => ({
    daily: [
      { id: 1, diary: 'Code writing', date: '2023-11-03', isFav: false },
      {
        id: 2,
        diary: 'PS playing',
        date: '2023-11-05',
        isFav: false,
      },
    ],
  }),
});
