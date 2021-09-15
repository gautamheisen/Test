import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import {PostsRoutingModule  } from "./lazy-routing.module";
import { InventoryComponent } from './inventory/inventory.component';

@NgModule({
  imports: [CommonModule, PostsRoutingModule],
  declarations: [InventoryComponent]
})
export class PostsModule {}