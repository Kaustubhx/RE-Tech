import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  showHamMenu: boolean = false;
  toggleHamMenu() {
    this.showHamMenu = !this.showHamMenu
    console.log(this.showHamMenu)
  }

  showProjects = false;
  toggleProjects(): void {
    this.showProjects = !this.showProjects
  }

  showServices = false;
  toggleServices(): void {
    this.showServices = !this.showServices
  }

  ngOnInit(): void {
  }
}


