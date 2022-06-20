import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user', title: 'User Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/role', title: 'Role Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/endpoint', title: 'Endpoint Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/faq', title: 'FAQ Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/progress', title: 'Progress Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/quiz', title: 'Quiz Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/topic', title: 'Topic Management',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/subtopic', title: 'Sub Topic Management',  icon:'ni-bullet-list-67 text-red', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
