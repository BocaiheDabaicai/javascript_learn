import {API_URL} from "./config.js";
import {getJSON} from "./helpers";

export const state = {
    recipe: {}
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}/${id}`)

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
        alert(error.message)
    }
}