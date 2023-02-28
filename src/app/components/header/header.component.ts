import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { filter } from 'rxjs';
import { filterModalData } from 'src/app/services/filterData.service';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private filterData: filterModalData) { }

  filters: any;
  
  slideOptsOne = {
    autoplay: true
  }

  back() {
    this.modal.dismiss(null, 'back');
  }

  exitLocation() {
    this.modal.dismiss(null, 'back');
  }

  // onWillDismiss(event: Event) {
  //   const ev = event as CustomEvent<OverlayEventDetail<string>>;
  //   if (ev.detail.role === 'confirm') {
  //     this.message = `Hello, ${ev.detail.data}!`;
  //   }
  // }


  ngOnInit(): void {
    this.filters = this.filterData;
    console.log(this.filters.filterData[0].placeholder)
  }
}


