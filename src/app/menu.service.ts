import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string; 
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

	allMenus = {
		/*'dashboard': [
			{ path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
		],*/
		'items': [
			{ path: '/items/new', title: 'New Item',  icon:'add_circle_outline', class: '' },
    		{ path: '/items', title: 'Items',  icon:'list', class: '' }
		],
	};

	titles = {
		'items': 'Inventory',
		'customers': 'Customers'
	};

 	menuItems: RouteInfo[];
 	activeTitle: string;

  constructor(private router: Router) { 
  	let menu = this.router.url.split('/')[1];
  	this.menuItems = this.allMenus[menu];
  	this.activeTitle = this.titles[menu];

  	this.router.events
  	.filter(event => event instanceof NavigationStart)
    .subscribe((event:NavigationStart) => {

    	let baseMenu = event.url.split('/')[1];
    	this.activeTitle = this.titles[baseMenu];
    	this.setMenuItems(this.allMenus[baseMenu]);
    })
  }


  setMenuItems(menuItems: RouteInfo[]) {
  	this.menuItems = menuItems;
  	// console.log("New Menu Loaded", this.menuItems)
  }

  getMenuItems(): Observable<RouteInfo[]> {
  	// console.log("Menus Fetched", this.menuItems);
  	return of(this.menuItems);
  }

}
