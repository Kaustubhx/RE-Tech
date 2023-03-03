import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-filtermodal',
  templateUrl: './filtermodal.component.html',
  styleUrls: ['./filtermodal.component.css']
})
export class FiltermodalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'back');
  }

  ngOnInit(): void {
  }

}
