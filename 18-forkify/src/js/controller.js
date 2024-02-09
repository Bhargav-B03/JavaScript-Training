// Controller contains Application logic

// model
import { MODAL_CLOSE_SEC } from './config.js';
import * as model from './model.js'
import addRecipeView from './view/addRecipeView.js';
import bookmarksView from './view/bookmarksView.js';

// views
import paginationView from './view/paginationView.js';
import recipeView from './view/recipeView.js';
import resultsView from './view/resultsView.js';
import searchView from './view/searchView.js';

// polyfill libraries
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const controlRecipe = async () => {
  try {
    // fetching the id from url
    const id = window.location.hash.slice(1);
    // console.log(id)
    if (!id) return;

    // spinning loader (view method)
    recipeView.renderSpinner();

    // 0. Update results to mark selected search result
    // resultsView.render(model.getSearchResultsPage());
    resultsView.update(model.getSearchResultsPage());

    // 1. Updating bookmark view
    bookmarksView.update(model.state.bookmarks);

    // 2. loading recipe (model method)
    await model.loadRecipe(id);

    // 3. rendering recipe (view method)
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.error(err)
    recipeView.renderError();
  }
}

const controlSearchResults = async function () {
  try {
    // spinning loader (view method)
    resultsView.renderSpinner();

    // 1. get search query (view method)
    const query = searchView.getQuery();
    if (!query) return;

    // 2. load search results (model method)
    await model.loadSearchResults(query);

    // 3. render results (view method(model method))
    resultsView.render(model.getSearchResultsPage());

    // render initial pagination button (view method)
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
}

const controlPagination = function (goToPage) {
  // 1. render results (view method(model method))
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2. render initial pagination button
  paginationView.render(model.state.search);
}

const controlServings = function (newServings) {
  // update the servings state (model method)
  model.updateServings(newServings);

  // render recipe state (view method)
  recipeView.update(model.state.recipe);
}

const controlAddBookmark = function () {
  // add or delete bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // update the view
  recipeView.update(model.state.recipe);

  // render the bookmark
  bookmarksView.render(model.state.bookmarks);
}

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
}

const controlAddRecipe = async function (newRecipe) {
  try {
    // showing the spinner
    addRecipeView.renderSpinner();

    // uploading new recipe
    await model.uploadRecipe(newRecipe);

    // render the recipe
    recipeView.render(model.state.recipe);

    // display message
    addRecipeView.renderMessage();

    // render bookmark view
    bookmarksView.render(model.state.bookmarks)

    // change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // closing the modal
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
}

const init = function () {
  // keep this method above all methods to avoid unwanted errors
  bookmarksView.addHandlerRender(controlBookmarks);

  recipeView.addHandlerRender(controlRecipe);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);


  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);

  addRecipeView.addHandlerUpload(controlAddRecipe)
}
init();