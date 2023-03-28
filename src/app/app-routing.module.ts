import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { ReciepsDetailComponent } from "./recieps/recieps-detail/recieps-detail.component";
import { ReciepsEditComponent } from "./recieps/recieps-edit/recieps-edit.component";
import { ReciepsStartComponent } from "./recieps/recieps-start/recieps-start.component";
import { ReciepsComponent } from "./recieps/recieps.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
const appRoutes:Routes=[
    {path:'',redirectTo:'/recipes',pathMatch:'full'},
    {path:'recipes',component:ReciepsComponent ,children:[
        {
            path:'' ,component:ReciepsStartComponent
        },
        {
            path:'new',component:ReciepsEditComponent
        },
        {
            path:':id',component:ReciepsDetailComponent
        },
        
        {
            path:':id/edit',component:ReciepsEditComponent
        }
    ]},
    {path:'shopping-list',component:ShoppingListComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})//converting from typescript class into angular module
export class AppRoutingModule{

}