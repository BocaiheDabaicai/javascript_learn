import * as model from './model.js'
import recipeView from "./views/recipeView.js";
import searchView from "./views/searchView";
import resultsView from "./views/resultsView";
import paginationView from "./views/paginationView.js"

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
        // resultsView.render(model.state.search)
        resultsView.render(model.getSearchResultsPage(1))

        // 3) 渲染分页按钮
        paginationView.render(model.state.search)
    }catch (error) {
        console.log(error)
    }
}

const controlPagination = function(goToPage){
    // 1) 渲染查询结果
    resultsView.render(model.getSearchResultsPage(goToPage))

    // 2) 渲染分页按钮
    paginationView.render(model.state.search)
}

const controlServings = async function (newRecipes) {
    // 1) 更新菜谱份数
    await model.updateServings(newRecipes)
    // 2) 更新食谱视图
    await recipeView.render(model.state.recipe)
}

const init = function(){
    recipeView.addHandlerRender(controlRecipes)
    recipeView.addHandlerUpdateServings(controlServings)
    searchView.addHandlerSearch(controlSearchResults)
    paginationView.addHandlerClick(controlPagination)
}
init()