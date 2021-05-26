<template>
    <div>
      <Navbar/>
      <main class="app-content">
        <div class="app-page">
          <router-view/>
        </div>
      </main>
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
