<template>
    <h1>Share your recipe with us!</h1>
    <AddRecipe @add-recipe="addRecipe"/>
</template>

<script>
import AddRecipe from '../components/AddRecipe.vue'
import RecipeDataService from '../services/RecipeDataService.js'
export default {
  name: 'MainPage',
  components: {
    AddRecipe,
  },

  data() {
      return {
      recipeList: [],
       }
   },

   methods: {
     addRecipe(newRecipe){
       RecipeDataService.addRecipe(newRecipe).then(response => newRecipe.id = response.id)
     }
   }

}
</script>

