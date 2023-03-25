import { Component } from '@angular/core';
import { Recipe } from './reciep.model';

@Component({
  selector: 'app-recieps',
  templateUrl: './recieps.component.html',
  styleUrls: ['./recieps.component.css']
})
export class ReciepsComponent {
selectedRecipe:Recipe;
//info :string;

}
