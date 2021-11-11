<template>
  <div>
    <div>
      <h1>Фільтр:</h1>
      <label>
        Назва
        <input type="text" v-model="searchTitle" />
      </label>
    </div>
    <div>
      <h1>Сортування</h1>
      <label>
        Сортувати за :
        <select v-model="sortField">
          <option value="title">Назва</option>
          <option value="author">Автор</option>
          <option value="publishingHouse">Видавництво</option>
        </select>
      </label>
      <book-item
        v-for="book in filteredBooks"
        :book="book"
        :key="book.id"
        @remove="$emit('remove', book)"
      />
    </div>
  </div>
</template>

<script>
import BookItem from "@/components/BookItem";
import { mapGetters } from "vuex";
export default {
  components: {
    BookItem,
  },
  data() {
    return {
      searchTitle: null,
      sortField: null,
    };
  },

  computed: {
    ...mapGetters(["getBooksList"]),
    filteredBooks() {
      let list = this.getBooksList;
      if (this.searchTitle)
        list = this.getBooksList.filter((item) =>
          item.title.startsWith(this.searchTitle)
        );
      if (this.sortField) {
        list.sort((item1, item2) => {
          let val1 = item1[this.sortField];
          let val2 = item2[this.sortField];
          if (typeof val1 === "string") {
            val1 = val1.toUpperCase();
            val2 = val2.toUpperCase();
          }
          if (val1 === val2) return 0;
          if (val1 > val2) return 1;
          return -1;
        });
      }
      return list;
    },
  },
};
</script>

<style scoped>
</style>