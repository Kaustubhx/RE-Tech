import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { projectsDetails } from 'src/app/services/detailPageData.service';
import { ContactmodalComponent } from '../contactmodal/contactmodal.component';
import { WhatsAppmodalComponent } from '../whatsappmodal/whatsappmodal.component';

@Component({
  selector: 'Header-Detail',
  templateUrl: './detailpageheader.component.html',
  styleUrls: ['./detailpageheader.component.css']
})
export class DetailpageheaderComponent implements OnInit {
  projectData: any;

  constructor(
    private route: ActivatedRoute,
    private projectsPageDetails: projectsDetails,
    private modalCtrl: ModalController
  ) { }

  async presentWhatsAppModal() {
    const modal = await this.modalCtrl.create({
      component: WhatsAppmodalComponent,
      breakpoints: [0, 0.25, 0.5,],
      initialBreakpoint: 0.40,
    });
    await modal.present();
  }

  async presentContactModal() {
    const modal = await this.modalCtrl.create({
      component: ContactmodalComponent,
      breakpoints: [0, 0.3, 0.5],
      initialBreakpoint: 0.40
    });
    await modal.present();
  }

  dotClicked = false;
  presentLinks() {
    this.dotClicked = !this.dotClicked
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.projectData = this.projectsPageDetails.getById(id);
  }

}
