import { Component ,OnInit} from '@angular/core';
import { Recipe } from './reciep.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recieps',
  templateUrl: './recieps.component.html',
  styleUrls: ['./recieps.component.css'],
  providers:[RecipeService]
})
export class ReciepsComponent implements OnInit {
selectedRecipe:Recipe;
 constructor(private recipeService:RecipeService){}//inject the recipeService here
ngOnInit(){
      this.recipeService.reciepeSelected.subscribe((recipe:Recipe)=>{
      this.selectedRecipe=recipe;
      });//Inform any changes or events
      }


}
