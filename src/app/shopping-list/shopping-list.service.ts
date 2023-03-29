import { Ingredient } from "../shared/ingriedents.model";
import {EventEmitter} from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
   //ingredientsChanged=new EventEmitter<Ingredient[]>();
   ingredientsChanged=new Subject<Ingredient[]>();//better approach of using approach
   startEditing=new Subject<number>();
   private ingriedents:Ingredient[]=[
        new Ingredient('Apples',5),
         new Ingredient('Tomatos',10)
      ];

    getIngrident(){
        return this.ingriedents.slice(); //to return copy of the array
    }  
   //to populate single item for editing
    getIngridentsByID(id:number){
       return this.ingriedents[id];
    }

    addIngrident(ingrident:Ingredient){
       this.ingriedents.push(ingrident);
       this.ingredientsChanged.next(this.ingriedents.slice());
    }


    addIngridentsFromRecipe(ingridients:Ingredient[]){
      this.ingriedents.push(...ingridients);
      this.ingredientsChanged.next(this.ingriedents.slice());

    }
}