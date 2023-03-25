import { Component, Input } from '@angular/core';
import { Recipe } from '../reciep.model';

@Component({
  selector: 'app-recieps-detail',
  templateUrl: './recieps-detail.component.html',
  styleUrls: ['./recieps-detail.component.css']
})
export class ReciepsDetailComponent {
@Input() recipe:Recipe;// to set the property from the outside--input

}
