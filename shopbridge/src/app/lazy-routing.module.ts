import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { InventoryComponent } from './inventory/inventory.component';


const routes: Routes = [
    // {path:'inventory',component : InventoryComponent,canActivate:[AuthGuardGuard]  },
    {path:'inventory',component : InventoryComponent },

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class PostsRoutingModule { }