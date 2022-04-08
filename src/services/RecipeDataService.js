import  axios from 'axios';

const RECIPES_API_BASE_URL = 'http://localhost:3000/api/recipeList/'
const MAIN_API_BASE_URL = 'http://localhost:3000/api/addRecipe/'
class RecipeDataService {
  getAll() {
    return axios.get(RECIPES_API_BASE_URL);
    
  }
  getIngredients(inclIngredients, notInclIngredients){
    return axios.get(RECIPES_API_BASE_URL).then(response => 
      response.data.filter(function(recipe){
        if(inclIngredients == ''){
          return notInclIngredients.some(ing => !recipe.ingredients.toLowerCase().includes(ing))
        } else if(notInclIngredients == ''){
          return inclIngredients.some(ing => recipe.ingredients.toLowerCase().includes(ing))
        } else
        return inclIngredients.some(ing => recipe.ingredients.toLowerCase().includes(ing)) && notInclIngredients.some(ing => !recipe.ingredients.toLowerCase().includes(ing))
      }))
  }
  addRecipe(recipe) {
    return axios.post(MAIN_API_BASE_URL, recipe);
  }
  updateRecipeNote(recipe, newNote) {
    recipe.note = newNote
    return axios.patch(RECIPES_API_BASE_URL + recipe.id, recipe);
  }

  updateRecipe(newRecipe, newId) {
    newRecipe.id = newId
    return axios.put(RECIPES_API_BASE_URL + newRecipe.id, newRecipe);
  }

  deleteRecipe(id) {
    return axios.delete(RECIPES_API_BASE_URL + id).then(response => {
      if(response.data != null) {
        alert("Recipe deleted")
      }
    });
  }
 
}
export default new RecipeDataService();