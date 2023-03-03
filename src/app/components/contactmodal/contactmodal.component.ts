import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-contactmodal',
  templateUrl: './contactmodal.component.html',
  styleUrls: ['./contactmodal.component.css']
})
export class ContactmodalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'back');
  }


  ngOnInit(): void {
  }

}
