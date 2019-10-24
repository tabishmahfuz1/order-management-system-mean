import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryRoutes } from './inventory.routing';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FormsModule } from '@angular/forms';
import { MenuService } from '../menu.service';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatTableModule,
  MatSelectModule,
  MatTabsModule,
  MatSnackBarModule
} from '@angular/material';

@NgModule({
  declarations: [
  	ItemListComponent,
	  ItemDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatTabsModule,
    MatSnackBarModule,
    RouterModule.forChild(InventoryRoutes),
  ]
})
export class InventoryModule {}
