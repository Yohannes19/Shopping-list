import { Ingredient } from "../shared/ingriedents.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService{
   ingredientsChanged=new EventEmitter<Ingredient[]>();
   private ingriedents:Ingredient[]=[
        new Ingredient('Apples',5),
         new Ingredient('Tomatos',10)
      ];

    getIngrident(){
        return this.ingriedents.slice(); //to return copy of the array
    }  
    addIngrident(ingrident:Ingredient){
       this.ingriedents.push(ingrident);
       this.ingredientsChanged.emit(this.ingriedents.slice());
    }
    addIngridentsFromRecipe(ingridients:Ingredient[]){
      this.ingriedents.push(...ingridients);
      this.ingredientsChanged.emit(this.ingriedents.slice());

    }
}