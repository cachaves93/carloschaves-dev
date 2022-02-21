import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public isSidebarOpen: boolean = false;

  constructor() { }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
