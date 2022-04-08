<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div> 
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  },

  data() {
      return {
      recipeList: [],
      showAddRecipe: false
       }
   },


}
</script>

<style>


body {
  background: url('./images/backgroundMain.jpg') no-repeat center center fixed;
  background-size: cover;
  overflow-y: scroll;
   
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
