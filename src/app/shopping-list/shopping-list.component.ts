import { Component,OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingriedents.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingriedents:Ingredient[]=[];
  constructor(private slService : ShoppingListService){}// injecting the service

ngOnInit() {
    this.ingriedents=this.slService.getIngrident();
}

 

}
