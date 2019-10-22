import { Routes } from '@angular/router';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { AuthGuard } from '../auth.guard';

export const CustomerRoutes: Routes = [
	// {
		// path: 'items',
		// children: [
	{ path: '',	component: CustomerListComponent },
    { path: 'new',	component: CustomerDetailComponent },
    { path: ':id',	component: CustomerDetailComponent },
		// ]
	// }
	
];