<template>
<div id="fullpage">
    <div class="section">
<div class="scrollable-content">
        <div  :key="recipe.id" v-for="recipe in recipeList" class="list">
            <Recipe @delete-recipe="$emit('delete-recipe', recipe.id)" 
            :recipe="recipe" />
        </div>  
    </div>
    </div>
</div>
</template>

<script>
import Recipe from './Recipe.vue'


export default {
   name: 'RecipeList',
   props: {
       recipeList: Array
   },
    components: { 
        Recipe, 
         },
           emits: ['delete-recipe', 'update-note'],


}


</script>

<style>
.section {
  text-align:center;
}

.scrollable-content{
  background: rgba(255, 255, 255, 0.38);
  overflow: scroll;
  margin: 0 auto;
  width: 500px;
  height: 450px;
}

@media screen and (max-height: 150px) {
 .scrollable-content{
      height: 80px;
  }
}

</style>

