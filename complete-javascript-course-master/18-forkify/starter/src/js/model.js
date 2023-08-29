export const state = {
    recipe: {}
};

export const loadRecipe = async function (id) {
    try {
        const response = await fetch(
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
            // `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604691c37cdc054bd0c0`
        )
        const data = await response.json();

        if (!response.ok) throw new Error(`${data.message} (${response.status})`)

        console.log(response, data)

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