import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  demoProjects: Array<object> = [
    {
      projectName: 'Amaze Cottages',
      projectImg: '../../../assets/images/propyDemo1.jpg',
      projectLocation: 'Palghar West, Thane',
      priceTo: '23L',
      priceFrom: '34L',
      roomSize: '331 Sq.Ft (Carpet)',
      alt: 'Demo1'
    }
  ]

}
