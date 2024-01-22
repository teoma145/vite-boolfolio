<template>
  <div>
  <AppHeader></AppHeader>
  <router-view></router-view>
  </div>
</template>

<script>
  import AppHeader from './components/AppHeader.vue'
  export default {
    name: 'App',
    data()  {

return {}


},
components: {
  AppHeader
}
  
}

  
</script>

<style lang="sass" scoped>


</style>