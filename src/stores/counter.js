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

  actions: {
    addNewTodo(newTodo) {
      this.daily.push(newTodo);
    },
    toggleFavorites(id) {
      const foundedTodo = this.daily.find((todo) => todo.id === id);
      foundedTodo.isFavorite = !foundedTodo.isFavorite;
    },
    deleteTodoById(id) {
      this.daily = this.daily.filter((todo) => {
        return todo.id !== id;
      });
    },
  },
});
