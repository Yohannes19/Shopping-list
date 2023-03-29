import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../reciep.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recieps-detail',
  templateUrl: './recieps-detail.component.html',
  styleUrls: ['./recieps-detail.component.css']
})
export class ReciepsDetailComponent implements OnInit{
 recipe:Recipe;//@Input() to set the property from the outside--input
id :number;
constructor(private recipeService:RecipeService,private route :ActivatedRoute, 
  private router :Router){} // to inject the recipe service and activated route to get the ID(current url) 

ngOnInit() {
    this.route.params.subscribe( //subscring the parameter to detect any changes
      (params:Params)=>{
        this.id = +params['id']
        this.recipe=this.recipeService.getReciper(this.id);
      }
    );
}
onAddToShoppingList(){
  this.recipeService.addIngrtoSL(this.recipe.ingridients);
}
onEditRecipe(){
 this.router.navigate(['edit'],{relativeTo:this.route});
}


}
