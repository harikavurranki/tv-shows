<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <div class="bg">
      <router-view/>
    </div>
    <FooterComponent></FooterComponent>
  </div>
</template>
<script>
import HeaderComponent from './components/header/HeaderComponent.vue'
import FooterComponent from './components/footer/FooterComponent.vue'
export default {
  components: { HeaderComponent, FooterComponent }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
