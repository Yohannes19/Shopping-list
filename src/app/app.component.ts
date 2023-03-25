import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'shopapp';
   loadedFeature ='recipe'
  onNavigator(feature:string){
   this.loadedFeature=feature;
  }
}
