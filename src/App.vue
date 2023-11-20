<template>
  <div class="layout">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="content">
      <Alert :error="error" :isLoading="isLoading" />

      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/Sidebar.vue'
import Alert from './components/Alert.vue'
import axios from 'axios'

export default {
  components: {
    Alert,
    Sidebar
  },
  data() {
    return {
      categories: [],
      isLoading: false,
      error: null
    }
  },
  provide() {
    return {
      categories: this.categories,
      items: this.items
    }
  },
  methods: {
    async loadDatas() {
      this.isLoading = true
      this.error = null

      try {
        const response = await axios.get('https://shoppinglist.wezeo.dev/cms/api/v1/shopping-lists')

        if (response.status === 200) {
          const shoppingLists = response.data.data

          shoppingLists.forEach((list) => {
            // Pozerám či sa dáta nenachádzaju už v liste - uniq
            const existingList = this.categories.find((category) => category.id === list.id)

            if (!existingList) {
              this.categories.push({
                id: list.id,
                title: list.title,
                items: list.items.map((item) => ({
                  id: item.id,
                  name: item.name,
                  value: item.value,
                  unit: item.unit,
                  is_checked: item.is_checked
                }))
              })
            }
          })

          console.log(this.categories)
        } else {
          throw new Error('Failed to fetch data!')
        }
      } catch (error) {
        this.handleError(error)
      } finally {
        this.isLoading = false
      }
    },

    handleError(error) {
      this.isLoading = false
      this.error = 'Failed to fetch data!' + ' ' + error
    }
  },
  mounted() {
    this.loadDatas()
  }
}
</script>

<style>
.alert {
  width: 100vw;
  position: fixed;
}
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
