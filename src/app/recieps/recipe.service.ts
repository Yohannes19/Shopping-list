import { Recipe } from "./reciep.model";
import {EventEmitter, Injectable} from "@angular/core";
import { Ingredient } from "../shared/ingriedents.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
@Injectable() 
export class RecipeService{
    //reciepeSelected=new EventEmitter<Recipe>();
   
    private recieps: Recipe[]=[ // which makes recipe cannot directly access from outside
        new Recipe('Test reciepe','This test reciepe is very good','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
        [ new Ingredient('meat',1),
          new Ingredient('French Fries',20)
         ])
       ,new Recipe('Big Fat Burger','This test reciepe is very good','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341',
       [
        new Ingredient('Bun',1),
        new Ingredient('Meat beef',4)
       ])];
       ;

    constructor(private slService:ShoppingListService){}// injecting shopping list service into recipe service   
    
    getRecipe(){
        return this.recieps.slice();// retuns the copy of the array
    }   
    getReciper(index:number){
      return this.recieps[index];
    }
    
    addIngrtoSL(ingridients:Ingredient[]){
     this.slService.addIngridentsFromRecipe(ingridients);
    }
}