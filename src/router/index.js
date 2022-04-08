import { createRouter, createWebHistory } from 'vue-router'
import AddRecipePage from '../views/AddRecipePage.vue'
import RecipeListPage from '../views/RecipeListPage.vue'
import MainPage from '../views/MainPage.vue'
const routes = [
        {
        path: '/',
        name: 'MainPage',
        component: MainPage,
    },
    {
        path: '/addRecipe',
        name: 'AddRecipe',
        component: AddRecipePage,
    },
    {
        path: '/recipeList',
        name: 'RecipeListPage',
        component: RecipeListPage,
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router