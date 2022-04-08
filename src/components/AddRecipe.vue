<template>
<form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Name</label>
      <input type="text" 
      v-model="name"
      name="name" 
      placeholder="Name" />
    </div>
    <div class="form-control">
      <label>Ingredients</label>
      <input
        type="text"
        v-model="ingredients"
        name="ingredients"
        placeholder="Ingredients"
      />
    </div>
    <div class="form-control">
      <label>Prep Time in minutes</label>
      <input type="number"
    v-model="preptime"
    name="preptime" 
    placeholder="Prep. Time (min)" 
    />
    </div>
    <div class="form-control">
      <label>Instructions</label>
      <input
        type="text"
        v-model="instructions"
        name="instructions"
        placeholder="Instructions" 
      />
    </div>
    <div class="form-control">
      <label>Note</label>
      <input type="number"
    v-model="note"
    name="note" 
    placeholder="Note from 0 to 10"
    />
    </div>
    <input type="submit" value="Save Recipe" class="btn btn-block" />
  </form>
    
</template>

<script>
export default {
    name: 'AddRecipe',
    data() {
        return {
            name:'',
            ingredients:'',
            preptime:'',
            instructions:'',
            note:''
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault()
           

             if(!this.name) {
                alert('Recipe must contain name')
                return
            } else if(!this.ingredients) {
                alert('Recipe must contain ingredients')
                return
            }else if(!this.instructions) {
                alert('Recipe must contain instructions')
                return
            }else if(this.note < 0 || this.note > 10) {
                alert('Note must be between 0 and 10')
                return
            }
            

            const newRecipe = {
                name: this.name,
                ingredients: this.ingredients,
                preptime: this.preptime,
                instructions: this.instructions,
                note: this.note,
            }
            
            this.$emit('add-recipe', newRecipe)

            this.name='',
            this.ingredients='',
            this.preptime='',
            this.instructions='',
            this.note=''
        }
    }
}

</script>

<style scoped>
.add-form {
  margin: 10px 250px;
}
.form-control {
  margin: 5px 5px;
}
.form-control label {
  display: block;
}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

</style>