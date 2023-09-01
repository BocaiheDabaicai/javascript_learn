import {API_URL} from "./config.js";
import {getJSON} from "./helpers";

export const state = {
    recipe: {},
    search:{
        query:'',
        results:[]
    }
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}get?rId=${id}`)

        console.log(data)

        let {recipe} = data
        state.recipe = {
            id: recipe.recipe_id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: Math.ceil(recipe.social_rank),
            sourceUrl: recipe.source_url,
            title: recipe.title,
            cookingTime:Math.ceil(Math.random()*85+15)
        }

        console.log(state.recipe)
    }catch (error){
        console.log(error.message)
        throw error
    }
}
export const loadSearchResults = async function(query){
    try {
        state.search.query = query
        const data = await getJSON(`${API_URL}search?q=${query}`)
        console.log(data)
        state.search.results = data.recipes.map(item=>{
            return {
                id: item.recipe_id,
                image: item.image_url,
                publisher: item.publisher,
                title: item.title,
            }
        })

        console.log(state)
    }catch (error) {
        console.log(error.message)
        throw error
    }
}
