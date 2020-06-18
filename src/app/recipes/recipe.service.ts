import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    
    // private recipes: Recipe[] = [
    //     new Recipe(
    //         'Ensalada Cesar',
    //         'gran almuerzo asegurado', 
    //         'https://badun.nestle.es/imgserver/v1/80/1290x742/d0d0440dab55-ensalada-cesar-con-nuggets.jpg',
    //          [
    //              new Ingredient('Pollo', 1),
    //              new Ingredient('Lechuga', 2),
    //              new Ingredient ('Aderezo', 1)
    //          ]),
    //     new Recipe(
    //         'Milanesa con pure', 
    //         'la mejor eleccion siempre!', 
    //         'https://i.pinimg.com/originals/f7/cb/e0/f7cbe0acb20add4be4804bc052302767.jpg',
    //          [
    //             new Ingredient('milanesa', 2),
    //             new Ingredient('papa', 4)
    //          ]),
    //     new Recipe(
    //             'Pizza napolitana', 
    //             'manjar de reyes!', 
    //             'https://t1.rg.ltmcdn.com/es/images/5/2/6/img_pizza_napolitana_32625_orig.jpg',
    //              [
    //                 new Ingredient('pizza', 1),
    //                 new Ingredient('mozzarella', 3),
    //                 new Ingredient('tomatoes', 3)
    //              ]),
    //     new Recipe(
    //         'Hamburguesa completa',
    //         'con sabrosas papas fritas',
    //         'https://www.revistadeck.com/sitio/wp-content/uploads/hamburguesa.jpg',
    //         [
    //             new Ingredient('carne', 1),
    //             new Ingredient('tomato', 1),
    //             new Ingredient('lechuga', 1),
    //             new Ingredient('papas', 3)
    //         ]
    //     )         
    //   ];

    private recipes: Recipe[] = [];

    constructor(private shoppingListService : ShoppingListService){}  

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
    
    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(id : number){
        return this.recipes[id];
    }
    
    onAddToShoppingList(ingredients : Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe : Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index : number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}