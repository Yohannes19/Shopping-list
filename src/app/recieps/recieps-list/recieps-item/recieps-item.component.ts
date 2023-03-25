import { Component,Input ,EventEmitter,Output} from '@angular/core';
import { Recipe } from '../../reciep.model';

@Component({
  selector: 'app-recieps-item',
  templateUrl: './recieps-item.component.html',
  styleUrls: ['./recieps-item.component.css']
})
export class ReciepsItemComponent {
@Input() recipe:Recipe;//to get the reciepe from the outside
@Output() reciepeSelected=new EventEmitter<void>(); //to listen this event from outside

onSelected(){
this.reciepeSelected.emit();
}
}
