import * as model from './model.js'
import recipeView from "./views/recipeView.js";

///////////////////////////////////////

const controlRecipes = async function () {
    try {
        const id = window.location.hash.slice(1);
        console.log(id)

        if (!id) return;
        recipeView.renderSpinner()

        // 1）加载食谱
        await model.loadRecipe(id)

        // 2) 渲染食谱
        recipeView.render(model.state.recipe)

    } catch (error) {
        alert(error.message)
    }
}

const init = function(){
    recipeView.addHandlerRender(controlRecipes)
}
init()