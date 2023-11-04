import { defineStore } from 'pinia';

export const useDailyStore = defineStore('dailyStore', {
  state: () => ({
    daily: [],
    loading: false,
  }),

  getters: {
    favorites() {
      return this.daily.filter((day) => day.isFavorite);
    },
    favoriteCount() {
      return this.daily.reduce((prev, current) => {
        return current.isFavorite ? prev + 1 : prev;
      }, 0);
    },
    totalCount: (state) => {
      return state.daily.length;
    },
  },

  actions: {
    async getTodos() {
      this.loading = true;
      const response = await fetch('http://localhost:3000/diary');
      const data = await response.json();
      this.daily = data;
      this.loading = false;
    },
    async addNewTodo(newTodo) {
      this.daily.push(newTodo);
      try {
        const response = await fetch('http://localhost:3000/diary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTodo),
        });
      } catch (error) {
        console.log(error);
      }
    },

    async toggleFavorites(id) {
      const foundedTodo = this.daily.find((todo) => todo.id === id);
      foundedTodo.isFavorite = !foundedTodo.isFavorite;

      try {
        const response = await fetch(`http://localhost:3000/diary/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(foundedTodo),
        });
      } catch (error) {
        console.log(error);
      }
    },

    async deleteTodoById(id) {
      this.daily = this.daily.filter((todo) => {
        return todo.id !== id;
      });

      try {
        const response = await fetch(`http://localhost:3000/diary/${id}`, {
          method: 'DELETE',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
});
