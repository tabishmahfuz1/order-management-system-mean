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
export class SidebarMenuService {

 	menuItems: RouteInfo[];

  constructor(private router: Router) { 
  	this.router.events
  	.filter(event => event instanceof NavigationStart)
    .subscribe((event:NavigationStart) => {

    	
    	console.log(this.router.url, event.url);
    })
  }


  setMenuItems(menuItems: RouteInfo[]) {
  	this.menuItems = menuItems;
  }

  getMenuItems(): Observable<RouteInfo[]> {
  	return of(this.menuItems);
  }

}
