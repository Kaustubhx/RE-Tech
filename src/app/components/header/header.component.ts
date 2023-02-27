import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  slideOptsOne = {
    autoplay: true
  }

  _opened: boolean = false;
  _closeOnClickOutside: boolean = false;

  toggleSidebar() {
    this._opened = !this._opened
  }

  private _toggleCloseOnClickOutside(): void {
    this._closeOnClickOutside = !this._closeOnClickOutside;
  }

  showProjects = false;
  toggleProjects(): void {
    this.showProjects = !this.showProjects
  }

  showServices = false;
  toggleServices(): void {
    this.showServices = !this.showServices
  }

  handleShowNav: any;

  ngOnInit(): void {

  }
}


