import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../reciep.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recieps-list',
  templateUrl: './recieps-list.component.html',
  styleUrls: ['./recieps-list.component.css']
})
export class ReciepsListComponent  implements OnInit{
     recieps: Recipe[]=[];
constructor(private recipeService:RecipeService,private router :Router
  ,private route:ActivatedRoute){}// we need to inject our service  from the recipe componenet and router for navigation


ngOnInit(){
  this.recieps=this.recipeService.getRecipe();
}
onNewRecipe(){
this.router.navigate(['new'],{relativeTo:this.route});
}

}
