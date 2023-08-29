import * as model from './model.js'
import recipeView from "./views/recipeView.js";


const timeout = function (s) {
    return new Promise(function (_, reject) {
        setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
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

const array = ['hashchange','load']
array.forEach(event => window.addEventListener(event,showRecipe))

// window.addEventListener('hashchange',showRecipe)
// window.addEventListener('load',showRecipe)
// showRecipe()