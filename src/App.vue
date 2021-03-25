<template>
  <div class="h-full" id="app">
<router-view></router-view>
<footerBas></footerBas>
  </div>
</template>

<script>
import footerBas from './components/footer.vue'

export default {
  name: 'App',
  components: {
    footerBas,
  }
}
</script>

<style>

</style>
