<template>
  <div id="app">
    <div id="nav">
      <router-link to="/page/1">Home</router-link> |
      <router-link to="/sort">Sort</router-link> |
    </div>
    <router-view/>
  </div>
</template>

<script>
import './csslib.css';
export default {
  name: 'App',
  created () {
    let page = this.$route.params.page
    console.log('page ', page)

    let count = 10;

    if (page){
      count = page * 10
    }



    this.$store.dispatch('getAllGiveawaysFromApi', count);
    // let page = this.$route.params.page
    // // alert(page)
    // let count = page * 10
    // this.$store.dispatch('getGiveawaysPerPage', count)
  },

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
