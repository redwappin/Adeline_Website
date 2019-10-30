import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  // { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
  { path: 'add', title: 'Ajouter Article',  icon:'ti-view-list-alt', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})


export class SidebarComponent implements OnInit {

  
  constructor() { }
  public menuItems: any[];
  ngOnInit() {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isNotMobileMenu(){
      if(window.innerWidth< 991){
          return false;
      }
      return true;
  }

}
