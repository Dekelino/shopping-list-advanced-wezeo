<template>
  <section>
    <header>
      <div class="navigator">
        <div class="arrow-name-container">
          <router-link to="/list/">
            <v-icon icon="mdi-arrow-left" color="white" size="x-large"></v-icon>
          </router-link>
          <h1>{{ title }}</h1>
        </div>
        <button>
          <v-icon icon="mdi-trash-can-outline" color="#C20000" size="x-large"></v-icon>
        </button>
      </div>
    </header>
    <main>
      <section class="main-container">
        <li v-for="item in itemsArray" :key="item.id">
          <div class="items">
            <div>
              <input :id="item.id" type="checkbox" v-model="item.is_checked" />
              <label :for="item.id">{{ item.name }}</label>
            </div>
            <div class="item-units">{{ item.value }} {{ item.unit }}</div>
          </div>
        </li>

        <li>
          +
          <input class="add-new" type="text" placeholder="New item" />
        </li>

        <div>
          <p>Selected items: {{ selectedItemsString }}</p>

          <p>full datas: {{ itemsArray }}</p>
        </div>
      </section>
    </main>
  </section>
</template>

<script>
export default {
  inject: ['categories'],
  data() {
    return {
      title: '',
      itemsArray: []
    }
  },
  computed: {
    selectedItemsString() {
      //pozeram či je checked, ak su tak mapujem ich names
      const selectedNames = this.itemsArray
        .filter((item) => item.is_checked)
        .map((item) => item.name)
      return selectedNames //returnuje array vybraných itemov
    }
  },
  
  created() {
    const categoryId = parseInt(this.$route.params.categoryId)
    const selectedCategory = this.categories.find((category) => category.id === categoryId)
    this.title = selectedCategory.title

    this.itemsArray = selectedCategory.items.map((item) => ({
      ...item //spread operator na vypisania všetého zo selectedCategory
    }))

  }
}
</script>

<style scoped>
.main-container {
  padding: 0 1rem;
  width: 75vw;
}

header {
  background-color: #70a9a1;
  width: 75vw;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

h1 {
  font-weight: bold;
  color: white;
}

li {
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  list-style: none;
  font-size: 1.25rem;
  background-color: white;
}

li label {
  padding-left: 4rem;
}

.add-new {
  border-bottom: 2px solid black;
  width: 90%;
}
.arrow-name-container {
  display: flex;
  justify-content: space-between;
  width: 15vw;
}

.items {
  display: flex;
  justify-content: space-between;
}
.item-units {
  background-color: #cfd7c7;
  color: #0b2027;
  padding: 0.1rem 0.7rem;
  border-radius: 12px;
}

.navigator {
  height: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}
</style>
