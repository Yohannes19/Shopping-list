import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingriedents.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingriedents:Ingredient[]=[
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10)
  ];

}
