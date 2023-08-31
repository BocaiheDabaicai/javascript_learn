import {API_URL, API_URL_SELECT} from "./config.js";
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
        const data = await getJSON(`${API_URL}${id}`)

        console.log(data)

        let {data: {recipe}} = data
        state.recipe = {
            id: recipe.id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: recipe.servings,
            sourceUrl: recipe.source_url,
            title: recipe.title,
        }

        console.log(recipe)
    }catch (error){
        console.log(error.message)
        throw error
    }
}
export const loadSearchResults = async function(query){
    try {
        state.search.query = query
        const data = await getJSON(`${API_URL_SELECT}search?q=${query}`)
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
