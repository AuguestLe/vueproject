<template>
    <ul class="list-unstyled">
        <slot name="book"
              v-for="book in books"
              :book-name="book.name"></slot>
    </ul>
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
      books: {
          type: Array
      }
  },
  methods: {
   
  }
}
</script>
