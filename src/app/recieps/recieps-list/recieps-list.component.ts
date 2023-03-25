import { Component, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../reciep.model';

@Component({
  selector: 'app-recieps-list',
  templateUrl: './recieps-list.component.html',
  styleUrls: ['./recieps-list.component.css']
})
export class ReciepsListComponent {
  @Output() recipeSecSelected=new EventEmitter<Recipe>();// to be listened from the outside

 recieps: Recipe[]=[
 new Recipe('Test reciepe','This test reciepe is very good','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341')
,new Recipe('Another test reciepe','This test reciepe is very good','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=375,341')];
;
onSelectedRecipe(recipe:Recipe){

    this.recipeSecSelected.emit(recipe); // emiiting the event for the seconf time
}


}
