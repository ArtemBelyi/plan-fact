<template>
    <div>
      <Navbar/>
      <v-content class="mx-3 my-4">
          <router-view/>
      </v-content>
    </div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
  name: 'main-layout',
  data () {
    return {
    }
  },
  components: {
    Navbar
  }
}
</script>
