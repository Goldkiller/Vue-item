<template>
  <div class="app">
      <!-- <Home></Home>   -->
    <router-view></router-view>
   <!-- <Home></Home>   -->
  </div>
</template>
<script>
import Head from './components/layout/Head'
import Home from './views/Home'
import Search from 'components/Search'
export default {
  name:'App',
  components:{
    Head,Search
  },
  
}
</script>


<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>

