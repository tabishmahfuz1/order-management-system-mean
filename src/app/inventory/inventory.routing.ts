import { Routes } from '@angular/router';

import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


export const InventoryRoutes: Routes = [
    { path: 'items',	component: ItemListComponent },
    { path: 'item/new',	component: ItemDetailComponent },
    { path: 'item/:id',	component: ItemDetailComponent },
];