<template>
  <section class="sidebar">
    <header>
      <section class="navigator">
        <h2>Shopping List</h2>
      </section>
    </header>
    <main>
      <div>
        <li>
          <v-icon icon="mdi-list-box-outline" color="#CFD7C7" size="large"></v-icon>
          <h3>List</h3>
        </li>
      </div>
      <ul>
        <sidebar-link
          v-for="category in categories"
          :key="category.id"
          :id="category.id"
          :title="category.title"
        >
        </sidebar-link>
      </ul>
      <div>
        <li>
          <v-icon icon="mdi-plus-box-outline" color="#CFD7C7" size="large"></v-icon>
          <h3>Add new list</h3>
        </li>
      </div>
    </main>
  </section>
</template>

<script>
import SidebarLink from './SidebarLink.vue'

export default {
  components: {
    SidebarLink
  },
  inject: ['categories']
}
</script>

<style scoped>
.sidebar {
  border-top-right-radius: 12px;
  background-color: #40798c;
}
.sidebar h1 {
  padding: 4rem 0;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 1rem auto;
  box-shadow: 0px 5px 0px -3px #abcdd8;

  border-radius: 12px;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
}

li:hover {
  background-color: #336170;
  transition: 0.4s;
  cursor: pointer;
}

h3 {
  padding-left: 2rem;
  font-weight: bold;
}
f .items {
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.navigator {
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  box-shadow: -5px 3px 8px rgba(0, 0, 0, 0.26);
}
</style>
