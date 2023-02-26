import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  modalRef: MdbModalRef<SidebarComponent> | null = null;

  constructor(private modalService: MdbModalService) { }

  showHamMenu: boolean = false;

  toggleSidebar() {
    this.showHamMenu = !this.showHamMenu
    // console.log(this.showHamMenu)
    // if(this.showHamMenu == true) {
    //   this.modalRef = this.modalService.open(SidebarComponent)
    // } else {
    //   this.modalRef?.close();
    // }
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


