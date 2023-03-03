import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-whatsappmodal',
  templateUrl: './whatsappmodal.component.html',
  styleUrls: ['./whatsappmodal.component.css']
})
export class WhatsAppmodalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'back');
  }

}
