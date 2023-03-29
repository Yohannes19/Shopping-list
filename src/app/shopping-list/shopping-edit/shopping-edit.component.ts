import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingriedents.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy{
      // @ViewChild('nameInput')  nameInputRef:ElementRef;
      // @ViewChild('amountInput')  amountInpuRef:ElementRef;// no need to use eleemnt reference from local

constructor(private slService:ShoppingListService){}
     //ingriedentAdd=new EventEmitter<{name:string,amount:number}>(); //event emiiter with type definition (type is javascript object)
    // @Output() ingriedentAdd=new EventEmitter<Ingredient>();// we can do this one by importing our model ingriedient and put output so we can litsen from outside
  @ViewChild('f') slForm:NgForm;
  subscription :Subscription;
  editMode=false;
  editingindexID:number;
  editItem:Ingredient;



ngOnInit(): void {
    this.subscription=this.slService.startEditing.subscribe(
     (index:number)=>{
       this.editingindexID = index;
       this.editMode=true;
       this.editItem=this.slService.getIngridentsByID(index);
       this.slForm.setValue(
        {
         name:this.editItem.name,
         amount:this.editItem.amount 
        }
       )
     }
    );
}

    onAddItem(form:NgForm){
     const value= form.value;
    const newIngriedent= new Ingredient(value.name,value.amount);
     this.slService.addIngrident(newIngriedent);
}
ngOnDestroy(): void {
    this.subscription.unsubscribe();
}
}