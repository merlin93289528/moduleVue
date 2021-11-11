<template>
  <div class="home">
    <book-form />
    <book-list/>
  </div>
</template>

<script>
import BookForm from "@/components/BookForm";
import BookList from "@/components/BookList";
export default {
  name: "Home",
  components: {
    BookForm,
    BookList,
  },
};
</script>
