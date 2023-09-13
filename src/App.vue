<script>
import AppHeader from './components/AppHeader.vue';
import AppLoader from './components/AppLoader.vue';
export default {
  components: {
    AppHeader,
    AppLoader
  },
  data() {
    return {
      loading: true,
      loader: false
    }
  },
  created() {
    setTimeout(() => {
      this.loading = false,
        this.loader = true
    }, 2500)
  },
}
</script>

<template>
  <div class="main-component">
    <AppLoader v-if="loading" />
    <AppHeader v-else-if="loader" />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

.main-component {
  position: relative;
}
</style>
