<template>
    <h1> Recipes List </h1>
    <div class="container">
    <form @submit="onSubmit" class="search-form">
    <div class="form-control">
      <input type="text" 
      v-model="inclIngredients"
      placeholder="Ingredients included" />
       </div>
      <div class="form-control">
       <input type="text" 
      v-model="notInclIngredients"
      placeholder="Ingredients not included" />
      </div>
      <input type="submit" value="Search recipes" class="btn btn-block" />
  </form>
  <button @click="reloadPage" > Show all recipes </button>
      <div class="container">
        <RecipeList @delete-recipe="deleteRecipe" 
      :recipeList="recipeList"/>
      </div>
    </div>
</template>

<script>
import RecipeList from '../components/RecipeList.vue'
import RecipeDataService from '../services/RecipeDataService.js'
export default {
  name: 'RecipeListPage',
  emits: ['delete-recipe', 'update-note'],
  components: {
    RecipeList,
  },

  data() {
      return {
      recipeList: [],
      showAddRecipe: false,
      inclIngredients: '',
      notInclIngredients: '',
       options:{
          paddingTop: '30px',
        }
       }
   },

  methods: {
    getRecipes(){
      RecipeDataService.getAll().then((response) => {
        this.recipeList = response.data
      })
    },

     deleteRecipe(id){
       console.log(id)
      RecipeDataService.deleteRecipe(id)
      window.location.reload()
   },

   reloadPage: function() {
     window.location.reload()
   },

    onSubmit(e) {


        e.preventDefault()

        let ingredientsArr = this.inclIngredients.toLowerCase().split(",")
        let ingredientsNotArr = this.notInclIngredients.toLowerCase().split(",")
        RecipeDataService.getIngredients(ingredientsArr, ingredientsNotArr).then(response => {
        this.recipeList = response })
    
        
      },

  },

 created() {
    this.getRecipes()
  }
}
</script>

<style>

.container {
  margin: 10px ;
  vertical-align: middle;
  justify-content: space-between;
}

.form-control{
   margin: 5px;
  vertical-align: middle;
  justify-content: space-between;
}

button{
   margin: 5px;
}

</style>
