<template>
  <div>
    <h4>Додати книгу</h4>
    <label>
      Назва:
      <input type="text" v-model="book.title" />
    </label>
    <label>
      Автор:
      <input type="text" v-model="book.author" />
    </label>
    <label>
      Видавництво:
      <input type="text" v-model="book.publishingHouse" />
    </label>
    <button @click="onAdd">Додати книгу</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      book: {
        title: null,
        author: null,
        publishingHouse: null,
      },
    };
  },
  methods: {
    ...mapActions(['addBook']),
    onAdd() {
          //3. Використовуємо actions як 
          //звичайні функції
          this.addBook({
              title: this.book.title,
              author:this.book.author,
              publishingHouse:this.book.publishingHouse
          })
      }
  },
};
</script>

<style scoped>
</style>