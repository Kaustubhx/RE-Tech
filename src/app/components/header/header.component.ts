import { Component, OnInit, HostListener, Inject, ViewChild, ElementRef } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { filterModalData } from 'src/app/services/filterData.service';
import { FiltermodalComponent } from '../filtermodal/filtermodal.component';


@Component({
  selector: 'Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private filterData: filterModalData, private modalCtrl: ModalController) { }

  slideOptsOne = {
    autoplay: true
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: FiltermodalComponent
    });
    await modal.present();
  }

  filters: any;

  ngOnInit(): void {
    this.filters = this.filterData;
    for (let i = 0; i < this.filters.filterData.length; i++) {
      const element = this.filters.filterData[i];
      // console.log(element)
    }

    // for (const items of this.filterData) {
    //   console.log(items)
    // }
    // console.log(this.filters)
  }
}


