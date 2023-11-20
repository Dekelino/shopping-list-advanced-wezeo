<template>
  <div>
    <v-alert v-if="error" class="alert" icon="$error" type="error" variant="tonal">
      {{ error }}
    </v-alert>

    <v-alert v-else-if="isLoading" class="alert" icon="$error" type="loading" variant="tonal">
      Loading...
    </v-alert>

    <v-alert v-else-if="success" class="alert" icon="$success" type="success" variant="tonal">
      {{success}}
    </v-alert>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      required: false,
      default: null
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    success: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>