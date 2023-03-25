import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingriedents.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
      @ViewChild('nameInput')  nameInputRef:ElementRef;
      @ViewChild('amountInput')  amountInpuRef:ElementRef;

     //ingriedentAdd=new EventEmitter<{name:string,amount:number}>(); //event emiiter with type definition (type is javascript object)
     @Output() ingriedentAdd=new EventEmitter<Ingredient>();// we can do this one by importing our model ingriedient and put output so we can litsen from outside
onAddItem(){
    const igName= this.nameInputRef.nativeElement.value;
    const igAmount=this.amountInpuRef.nativeElement.value;
    const newIngriedent= new Ingredient(igName,igAmount);
    this.ingriedentAdd.emit(newIngriedent);
}
}