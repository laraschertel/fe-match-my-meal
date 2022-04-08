<template>
    <div class="recipe">
      <h3>
      <div class="element">
    {{recipe.name}}
     </div>
      <div class="element">
    <button @click="() => TogglePopup('buttonTrigger')"> Show Recipe </button>
    </div>
    <div class="element">
        <div class="x-element">
          <i @click="$emit('delete-recipe', id )" class="fas fa-times"></i>
        </div>
    </div>
    </h3>
    </div>

    <RecipePopup v-if="popupTriggers.buttonTrigger" 
    :TogglePopup="() => TogglePopup('buttonTrigger')">
        <div class="popupContainer" id='popupContainer'>
          <h1> {{recipe.name}}</h1>
            <h3> Ingredients: </h3> 
             <p> {{recipe.ingredients}}  </p> 
            <h3> Preparation time: </h3>   
            <p>{{recipe.preptime}} min </p>
            <h3> Instructions: </h3>
            <p> {{recipe.instructions}}</p>
           <h3> Note: </h3> 
            <p> {{recipe.note}} </p>
          <form @submit="onSubmit" class="note-form">
            <label>New note:</label>
            <input type="number"
              v-model="newNote"
              placeholder="Note" />
              <input type="submit" value="Save Note" class="btn btn-block" />
          </form>
          <button id="hide-form" v-on:click="showUpdateRecipe">{{this.showUpdateform ? 'Close update form' : 'Show update form'}}</button>
          <div v-show="showUpdateform">
            <h3> Please enter new name, ingredients und instructions to overwrite the recipe </h3>
          <AddRecipe @add-recipe="updateRecipe"/>
          </div>
        </div>
      </RecipePopup>
</template>

<script>
import { ref } from 'vue'
import RecipePopup from '../views/RecipePopup.vue'
import RecipeDataService from '../services/RecipeDataService.js'
import AddRecipe from './AddRecipe.vue'
export default {
  
    name: "Recipe",
    emits: ['delete-recipe', 'update-note'],
    components: {
    RecipePopup,
    AddRecipe
  },
    props: {
        recipe: Object,
    },


    data() {
      return {
        newNote: '0',
        showUpdateform: false,
          button: [
      { text: 'Show Update form'}
    ],
      }
    },

    setup(){
        const popupTriggers = ref({
          buttonTrigger: false,
        });

    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

      return {
        RecipePopup, 
        popupTriggers,
        TogglePopup
      }
    },

    methods: {
      onSubmit(e) {
        e.preventDefault()
        if(this.newNote < 0 || this.newNote > 10){
           alert('Note must be between 0 and 10')
                return
        }else {
         RecipeDataService.updateRecipeNote(this.recipe, this.newNote)
         }
      },
    updateRecipe(newRecipe){
        RecipeDataService.updateRecipe(newRecipe, this.recipe.id)
         window.location.reload()
        },

      showUpdateRecipe(){
        this.showUpdateform = !this.showUpdateform
      }

    }
}

</script>

<style>


.recipe {
  background: #f4f4f4bb;
  margin: 1px;
  padding: 1px;


}

.recipe h2 {
   vertical-align: middle;
   
}

.x-element{
  color: red;
}

.popupContainer{
  background-color: rgba(255, 255, 255, 0.756);
  padding: 30px;
}


.element {
margin: 1px;
padding: 1px;
vertical-align: middle;
}
</style>