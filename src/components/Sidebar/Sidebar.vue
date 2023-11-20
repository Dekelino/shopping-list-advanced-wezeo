<template>
  <section class="sidebar">
    <header>
      <section class="navigator">
        <h2>Shopping List</h2>
      </section>
    </header>
    <main>
      <div>
        <router-link class="recolor" to="/list/">
          <li>
            <v-icon icon="mdi-list-box-outline" color="#CFD7C7" size="large"></v-icon>
            <h3>List</h3>
          </li>
        </router-link>
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
      <div @click="openPopup">
        <li>
          <v-icon icon="mdi-plus-box-outline" color="#CFD7C7" size="large"></v-icon>
          <h3>Add new list</h3>
        </li>
      </div>
      <Popup v-if="isPopupOpen">
        <h2>Enter list name</h2>
        <input
          v-model="createInput"
          type="text"
          @keyup.enter="createNewList"
          placeholder="Family dinner"
        />
        <div class="buttons-container">
          <button class="close" @click="closePopup()">Close popup</button>
          <button @click="createNewList" class="create">Create</button>
        </div>
      </Popup>
    </main>
  </section>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import Popup from './Popup.vue'
import axios from 'axios'

export default {
  components: {
    SidebarLink,
    Popup
  },
  data() {
    return {
      isPopupOpen: false,
      createInput: ''
    }
  },
  inject: ['categories'],
  methods: {
    openPopup() {
      this.isPopupOpen = true
    },
    closePopup() {
      this.isPopupOpen = false
    },
    async createNewList() {
      try {
        await axios.post('https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists', {
          title: this.createInput,
          items: []
        })
        this.$router.go('/list/')
        this.isPopupOpen = false
      } catch (error) {
        console.log(error)
      }
    }
  }
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

.recolor {
  color: white;
}

input {
  border-bottom: 2px solid black;
  width: 90%;
  height: 20%;
  font-size: large;
}

button {
  background-color: red;
  border-radius: 8px;
  padding: 0.3rem;
}

.buttons-container {
  display: flex;
  justify-content: space-between;
  width: 60%;
}

button.create {
  background-color: #70a9a1;
  justify-content: center;
  color: black;
}
button.create:hover {
  transition: 0.4s;
  background-color: #40798c;

  color: white;
}

button.close {
  background-color: #cfd7c7;
}

button.close:hover {
  transition: 0.4s;
  color: white;
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
