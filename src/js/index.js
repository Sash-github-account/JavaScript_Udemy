// Global app controller 
//https://www.food2fork.com/api/search
//my api key: 33bb2a691acfcfa0f40979d3c1a34458

import Search from './models/Search';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import {elements, renderLoader, clearLoader} from './views/base';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';

//global state
//* search object
//* current recipie obj
//* shopping list obj
//* liked recipies
const state = {};



const controlSearch = async ()=> {
    const query = searchView.getInput(); //uncomment this
    
    //const query = 'pizza'
    
    console.log(query)
    
    if(query){
        //new search obj add to state
        state.search = new Search(query);
        
        //prepare for UI
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        
        try{
                    // search for recipes
            await state.search.getResults();
        
            //render results in UI
            clearLoader();
            searchView.renderResults(state.search.result)
            //console.log(state.search.result)
            
        }catch(err){
            alert('Something went wrong with search');
            clearLoader();
        }

    }
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});



elements.searchForm.addEventListener('click',e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }

})
//search.getResults();

// RECIPE CONTROL

const controlRecipe = async ()=>{
    const id = window.location.hash.replace('#','');
    console.log(id)
    
    if(id){
        
        recipeView.clearRecipe();
        
        renderLoader(elements.recipe);
        
        if(state.search) searchView.highlightSelected(id);
        
        state.recipe = new Recipe(id);
        

        
        try{
            
         await state.recipe.getRecipe();   
         state.recipe.parseIngredient()   
        
        state.recipe.calcTime();
        state.recipe.calcServings();
        
        clearLoader();
        recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
            
        }catch(err){
            alert('Error processing recipe')
        }
        
    }
    //console.log(id)
}



['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


const controlList= ()=>{
    
    // create a new list if not there
    if(!state.list) state.list = new List();
    
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addition(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
        
    })
    
}


elements.shopping.addEventListener('click', e=> {
    const id = e.target.closest('.shopping__item').dataset.itemid;
    
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem(id);
        listView.deleteItem(id);
        
    }else if (e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value, 10);
        state.list.updateCount(id, val);
    }
    
})


// LIKE control
const controlLike = () => {
    
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;
    
    if(!state.likes.isLiked(currentID)){
        
        const newLike = state.likes.addLike(currentID, state.recipe.title, state.recipe.author, state.recipe.img);
        
        likesView.toggleLikeBtn(true)
        likesView.renderLike(newLike)

        
    }else {
        
        state.likes.deleteLike(currentID);
        likesView.toggleLikeBtn(false)
        
        likesView.deleteLike(currentID)

  
        
    }
    
    likesView.toggleLikeMenu(state.likes.getNumLikes())
    
}

//restore liked recipes
window.addEventListener('load', ()=>{
    
    state.likes = new Likes()
    state.likes.readStorage()
    likesView.toggleLikeMenu(state.likes.getNumLikes())
    state.likes.likes.forEach(like=> likesView.renderLike(like))
    
})


// handling rec btn clicks

elements.recipe.addEventListener('click', e=>{
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
        
        if(state.recipe.servings > 1){
            
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
           
        }
        
    }else if(e.target.matches('.btn-increase, .btn-increase *')){
        
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);

    }else if(e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    }else if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
    
    
});




