<template>
  <v-app>
    <div id="app">
      <component v-bind:is="layout">
        <router-view/>
      </component>
    </div>
  </v-app>
</template>

<script>
import MainLayout from "./layouts/MainLayout"

export default {
  name: "App",
  components: {
    MainLayout
  },
  data () {
    return {
      //
    }
  },
  computed: {
    layout () {
      return (this.$route.meta.layout || 'main') + '-layout'
    }
  }
};
</script>
