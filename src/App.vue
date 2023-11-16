<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue'

export default {
  data() {
    return {
      categories: [
        {
          id: 317,
          title: 'Groceries',
          icon: null,
          items: [
            { id: 315, name: 'Banana', value: '1', unit: 'piece', is_checked: false },
            { id: 316, name: 'Tomato', value: '1', unit: 'piece', is_checked: false },
            { id: 317, name: 'Salsa', value: '1', unit: 'piece', is_checked: false },
            { id: 318, name: 'Pear', value: '1', unit: 'piece', is_checked: false },
            { id: 319, name: 'Apple', value: '1', unit: 'piece', is_checked: false }
          ]
        },
        {
          id: 315,
          title: 'Martinus',
          icon: null,
          items: [
            { id: 306, name: 'Zaklinac 7', value: '1', unit: 'piece', is_checked: false },
            { id: 307, name: 'Dokonale stopy', value: '1', unit: 'piece', is_checked: false },
            { id: 308, name: 'Duna', value: '1', unit: 'piece', is_checked: false }
          ]
        },
        {
          id: 215,
          title: 'Datart',
          icon: null,
          items: [
            { id: 153, name: 'PlayStation 5', value: '1', unit: 'Piece', is_checked: false },
            { id: 154, name: "Marvel's Spider-Man 2", value: '1', unit: 'Piece', is_checked: true }
          ]
        }
      ]
    }
  },
  provide() {
    return {
      categories: this.categories,
      items: this.items
    }
  },
  components: { Sidebar }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
  background-color: #f1f3ee;
}

.layout {
  display: flex;
  flex-direction: row;
  background-color: #f1f3ee;
}
.sidebar {
  top: 0;
  left: 0;
  bottom: 0;
  color: white;
  width: 25vw;
  position: fixed;
}
.content {
  width: 75vw;
  padding-left: 25vw;
  background-color: #f1f3ee;

}
</style>
