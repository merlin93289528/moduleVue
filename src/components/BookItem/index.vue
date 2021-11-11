<template>
  <div>
    <div class="item">
      <div><strong>Назва книги</strong> : {{ book.title }}</div>
      <div><strong>Автор книги</strong> : {{ book.author }}</div>
      <div><strong>Видавництво</strong> : {{ book.publishingHouse }}</div>
    </div>
    <button @click="onDelete">удалити</button>
  </div>
  
</template>

<script>
import {mapActions} from 'vuex'
export default {
  props: {
    book: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
      ...mapActions(['deleteBook']),
      onDelete(){
          this.deleteBook(this.book)
      }
  },
};
</script>

<style scoped>
.item {
  margin: 10px;
}
</style>