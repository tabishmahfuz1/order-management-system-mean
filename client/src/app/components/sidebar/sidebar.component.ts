import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu.service';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string; 
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/items/new', title: 'New Item',  icon:'add_circle_outline', class: '' },
    { path: '/items', title: 'Items',  icon:'list', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(public menuService: MenuService) { }

  ngOnInit() {
    // this.menuItems = ROUTES.filter(menuItem => menuItem);

    /*this.menuService.getMenuItems()
        .subscribe(routes => {
          this.menuItems = routes;
          console.log("Updated Menus", this.menuItems)
        });*/
  }
  isMobileMenu() {
    // return false;
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
