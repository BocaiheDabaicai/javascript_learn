import {API_URL, RES_PER_PAGE} from "./config.js";
import {getJSON, getNumber} from "./helpers";
import bookmarksView from "./views/bookmarksView";

export const state = {
    recipe: {},
    search: {
        query: '',
        results: [],
        page: 1,
        resultsPerPage: RES_PER_PAGE
    },
    bookmarks: []
};

export const loadRecipe = async function (id) {
    try {
        const data = await getJSON(`${API_URL}get?rId=${id}`)

        let {recipe} = data
        state.recipe = {
            id: recipe.recipe_id,
            image: recipe.image_url,
            ingredients: recipe.ingredients,
            publisher: recipe.publisher,
            servings: 8,
            sourceUrl: recipe.source_url,
            title: recipe.title,
            cookingTime: Math.ceil(Math.random() * 85 + 15)
        }

        state.recipe.bookmarked = state.bookmarks.some(bookmark => bookmark.id === id);

        console.log(state.recipe)
    } catch (error) {
        console.log(error.message)
        throw error
    }
}
export const loadSearchResults = async function (query) {
    try {
        state.search.query = query
        const data = await getJSON(`${API_URL}search?q=${query}`)
        console.log(data)
        state.search.results = data.recipes.map(item => {
            return {
                id: item.recipe_id,
                image: item.image_url,
                publisher: item.publisher,
                title: item.title,
            }
        })

        console.log(state)
    } catch (error) {
        console.log(error.message)
        throw error
    }
}

export const getSearchResultsPage = function (page = state.search.page) {
    state.search.page = page

    const start = (page - 1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage

    return state.search.results.slice(start, end)
}

export const updateServings = function (newServings) {
    state.recipe.ingredients = state.recipe.ingredients.map(item => {
        let value = item.split(' ')[0]
        if (value.includes('-')) {
            let [first, second] = value.split('-')
            item = item.replace(value, (first * newServings / state.recipe.servings).toFixed(2) + '-' + (getNumber(second) * newServings / state.recipe.servings).toFixed(2))
            return item
        }
        if (value.includes('/') && !value.includes('-')) {
            item = item.replace(value, (getNumber(value) * newServings / state.recipe.servings).toFixed(2))
            return item

        }
        if (+value) {
            item = item.replace(value, (value * newServings / state.recipe.servings).toFixed(2))
            return item
        }
        return item
    })

    state.recipe.servings = newServings
}

const persistBookmarks = function () {
    localStorage.setItem('bookmarks',JSON.stringify(state.bookmarks))
}

export const addBookmark = function (recipe) {
    state.bookmarks.push(recipe)

    if (recipe.id === state.recipe.id) state.recipe.bookmarked = true

    persistBookmarks()
}

export const deleteBookmark = function (id) {
    const index = state.bookmarks.findIndex(element => element.id === id)
    state.bookmarks.splice(index, 1)

    if (id === state.recipe.id) state.recipe.bookmarked = false

    persistBookmarks()
}

const init = function(){
    const storage = localStorage.getItem('bookmarks')
    if(storage) state.bookmarks = JSON.parse(storage)
}
init()

const clearBookmarks = function(){
    localStorage.clear('bookmarks')
}