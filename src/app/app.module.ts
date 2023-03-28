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
import { FormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AppRoutingModule } from './app-routing.module';
import { ReciepsStartComponent } from './recieps/recieps-start/recieps-start.component';
import { ReciepsEditComponent } from './recieps/recieps-edit/recieps-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReciepsComponent,
    ReciepsListComponent,
    ReciepsDetailComponent,
    ReciepsItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    ReciepsStartComponent,
    ReciepsEditComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
