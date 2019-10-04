import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryRoutes } from './inventory.routing';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  	ItemListComponent,
	ItemDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(InventoryRoutes),
  ]
})
export class InventoryModule { }
