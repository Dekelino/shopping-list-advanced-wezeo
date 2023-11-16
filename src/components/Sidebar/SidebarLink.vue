<template>
  <section>
    <div>
      <ul>
        <router-link :to="detailsLink">
          <li>
            <v-icon icon="mdi-basket-outline" color="#CFD7C7" size="large"></v-icon>
            <h3>{{ title }}</h3>
          </li>
          </router-link>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  props: ['id', 'title'],
  computed: {
    detailsLink() {
      return '/list/' + this.id
    }
  }
}
</script>

<style scoped>
section {
  padding-left: 2rem;
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
}
</style>
