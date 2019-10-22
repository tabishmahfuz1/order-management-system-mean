import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerRoutes } from './customers.routing';
import { RouterModule } from '@angular/router';
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
  declarations: [CustomerListComponent, CustomerDetailComponent],
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
    RouterModule.forChild(CustomerRoutes),
  ]
})
export class CustomerModule { }
