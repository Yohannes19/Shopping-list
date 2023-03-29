import { Component,OnDestroy,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingriedents.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit ,OnDestroy{
  ingriedents:Ingredient[]=[];
  private igSubscription:Subscription;
  constructor(private slService : ShoppingListService){}// injecting the service

ngOnInit() {
    this.ingriedents= this.slService.getIngrident();
    this.igSubscription = this.slService.ingredientsChanged.subscribe(
      (ingriedents:Ingredient[])=>{
        this.ingriedents=ingriedents;
      }
    );
}
ngOnDestroy(): void {
    this.igSubscription.unsubscribe();
}
onEditItem(index:number){
this.slService.startEditing.next(index);//emitting the item id to edit
}
 

}
