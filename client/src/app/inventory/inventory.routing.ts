import { Routes } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AuthGuard } from '../auth.guard';

export const InventoryRoutes: Routes = [
	// {
		// path: 'items',
		// children: [
	{ path: '',	component: ItemListComponent },
    { path: 'new',	component: ItemDetailComponent },
    { path: ':id',	component: ItemDetailComponent },
		// ]
	// }
	
];