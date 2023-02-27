import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  slideOptsOne = {
    autoplay: true,
    pager: "true",
    loop: "true",
  }

  bannerImageAndLocations = [
    {
      id: '1',
      propertyImage: '../../../assets/images/bannerImage1.jpg',
      propertyName: 'Amaze Plaza',
      propertyLoction: 'Powai, Mumbai',
    },
    {
      id: '2',
      propertyImage: '../../../assets/images/bannerImage2.jpg',
      propertyName: 'Queen Tower',
      propertyLoction: 'Borivali West, Mumbai',
    },
    {
      id: '3',
      propertyImage: '../../../assets/images/bannerImage3.jpg',
      propertyName: 'Pride Tower',
      propertyLoction: 'Mumbai Central, Mumbai',
    },
    {
      id: '4',
      propertyImage: '../../../assets/images/bannerImage4.jpg',
      propertyName: 'Prime Heights',
      propertyLoction: 'Dadar East, Mumbai',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
