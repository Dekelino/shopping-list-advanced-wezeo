<template>
  <section>
    <ul>
      <shopping-item
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :title="category.title"
        :items="category.items"
      ></shopping-item>
    </ul>
  </section>
</template>

<script>
import ShoppingItem from './ShoppingItem.vue'

export default {
  components: {
    ShoppingItem
  },
  inject: ['categories'],
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0 2rem;
  width: 75vw;
}
</style>
