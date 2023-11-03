import { defineStore } from 'pinia';

export const useDailyStore = defineStore('dailyStore', {
  state: () => ({
    daily: [
      { id: 1, diary: 'Code writing', date: '2023-11-03', isFavorite: true },
      {
        id: 2,
        diary: 'PS playing',
        date: '2023-11-05',
        isFavorite: false,
      },
    ],
  }),

  getters: {
    favorites() {
      return this.daily.filter((day) => day.isFavorite);
    },
    favoriteCount() {
      return this.daily.reduce((previous, current) => {
        return current.isFavorite ? previous + 1 : previous;
      }, 0);
    },
    totalCount: (state) => {
      return state.daily.length;
    },
  },
});
