<template>
    <footer>
        <div class=wrapper>
            <div class=link>
            <router-link to="/addRecipe" > Add Recipe </router-link>
            </div>
            <div class=link>
            <router-link to="/" > Main Page </router-link>
            </div>
            <div class=link>
            <router-link to="/recipeList" > Recipes List </router-link>
            </div>
        </div>
         <p> Match my meal! </p>
        <p> Website from Lara Schertel </p>
    </footer>
</template>

<style>
router-link {
    color: rgb(163, 179, 212);

}

.link{
     background-color:rgba(245, 245, 245, 0.612) ;
     margin: 1px 1px;

    padding: 3px;
}
.wrapper {
    display: inline-flex;
    justify-content: center;
    margin-top: 30px;
    text-align:center;
    color: rgb(211, 128, 160)  
}

footer{
color: rgb(211, 128, 160)  
}


</style>