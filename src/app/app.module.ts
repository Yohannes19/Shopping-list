import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReciepsComponent } from './recieps/recieps.component';
import { ReciepsListComponent } from './recieps/recieps-list/recieps-list.component';
import { ReciepsDetailComponent } from './recieps/recieps-detail/recieps-detail.component';
import { ReciepsItemComponent } from './recieps/recieps-list/recieps-item/recieps-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepsComponent,
    ReciepsListComponent,
    ReciepsDetailComponent,
    ReciepsItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
