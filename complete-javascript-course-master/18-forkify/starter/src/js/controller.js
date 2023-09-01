import * as model from './model.js'
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";

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
        recipeView.renderError(error)
    }
}

const controlSearchResults = async function(){
    try{
        const query = searchView.getQuery();
        if(!query) return;

        // 1) 加载查询结果
        await model.loadSearchResults(query)

        // 2) 渲染查询结果
        resultsView.render(model.state.search)

    }catch (error) {
        console.log(error)
    }
}

const init = function(){
    recipeView.addHandlerRender(controlRecipes)
    searchView.addHandlerSearch(controlSearchResults)
}
init()