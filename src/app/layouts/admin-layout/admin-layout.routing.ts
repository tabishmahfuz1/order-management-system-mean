import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';

import { AuthGuard } from '../../auth.guard';

export const AdminLayoutRoutes: Routes = [
    {
        path: '', //default pathMatch: 'prefix'
        redirectTo: 'dashboard',
        // canActivate: [AuthGuard]
    },
    { path: 'dashboard',    component: DashboardComponent/*, canActivate: [AuthGuard]*/ },
    {
    	path: 'items',
    	loadChildren: '../../inventory/inventory.module#InventoryModule'
    },
    {
        path: 'customers',
        loadChildren: '../../customer/customer.module#CustomerModule'
    }
];
