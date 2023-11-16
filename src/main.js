import './assets/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import ShoppingDetail from './components/List/ShoppingDetail.vue'
import ShoppingList from './components/List/ShoppingList.vue'

import { createApp } from 'vue'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/list/', component: ShoppingList },
    { path: '/list/:categoryId', component: ShoppingDetail }
  ],

  linkActiveClass: 'active'
})

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css"
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const app = createApp(App)
app.use(router)
app.use(vuetify)

app.mount('#app')
