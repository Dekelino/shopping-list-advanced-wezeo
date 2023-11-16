<template>
    <li>
      <h3>{{ title }}</h3>
      <div>
        <li class="items" v-for="item in itemsArray" :key="item.id">
          {{ item.name }}
          <div class="item-units">
            {{ item.value }}
            {{ item.unit }}
          </div>
        </li>
      </div>
      <router-link :to="detailsLink">Go to details</router-link>
    </li>
</template>

<script>
export default {
  props: ['id', 'title', 'items'],
  data() {
    return {
      itemsArray: this.items
    }
  },
  computed: {
    detailsLink() {
      return '/list/' + this.id
    }
  }
}
</script>

<style scoped>
li {
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: bold;
}
.items {
  display: flex;
  justify-content: space-between;
}
.item-units {
  background-color: #CFD7C7;
  color: black;
  padding: 0.1rem 0.7rem;
  border-radius: 12px;
}

a {
  display: inline-block;
  display: flex;
  justify-content: center;
}

a:hover,
a:active {
  background-color: #40798c;
  text-decoration: none;
  color: #E3EEF2 ;
  display: inline-block;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  border-radius: 8px;
}
</style>
