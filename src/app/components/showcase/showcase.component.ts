import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HomePageDetails } from 'src/app/services/homePageData.service';
import { WhatsAppmodalComponent } from '../whatsappmodal/whatsappmodal.component';


@Component({
  selector: 'Showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor(private homePageDetails: HomePageDetails, private modalCtrl: ModalController) {
  }

  propertyCard: any;
  ngOnInit(): void {
    this.propertyCard = this.homePageDetails.homePageData[0].property_card
    console.log(this.propertyCard)
  }

  projectSlideOpt = {
    slidesPerView: 1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        // spaceBetween: 82
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        // spaceBetween: 47
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3
      },
      1440: {
        slidesPerView: 4
      }
    }
  }

  async presentWhatsAppModal() {
    const modal = await this.modalCtrl.create({
      component: WhatsAppmodalComponent,
      breakpoints: [0, 0.25, 0.5,],
      initialBreakpoint: 0.40,
    });
    await modal.present();
  }

}
