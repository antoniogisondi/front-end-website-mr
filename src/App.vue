<script>
import AppHeader from './components/AppHeader.vue';
export default {
  components: {
    AppHeader,
  },
  data() {
    return {

    }
  },
  created() {

  },
}
</script>

<template>
  <div class="main-component">
    <AppHeader />
  </div>
  <router-view></router-view>
</template>

<style lang="scss">
@use './styles/generals.scss' as *;

.main-component {
  position: relative;
}
</style>
