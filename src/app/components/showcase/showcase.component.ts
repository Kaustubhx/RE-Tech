import { Component, OnInit, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';


@Component({
  selector: 'Showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }

  projectSlideOpt = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
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

  demoProjects = [
    {
      id: '1',
      projectName: 'Amaze Tower',
      projectImg: '../../../assets/images/propyDemo2.jpg',
      projectLocation: 'Wagle Estate, Thane',
      priceTo: '46L',
      priceFrom: '58.5L',
      projectStatus: 'New Launch',
      roomVariation: '3,4 BHK',
      roomSize: '331 Sq.Ft (Carpet)',
      alt: 'Demo1'
    },
    {
      id: '2',
      projectName: 'Queen Cottage',
      projectImg: '../../../assets/images/propyDemo1.jpg',
      projectLocation: 'Palghar West, Thane',
      priceTo: '23L',
      priceFrom: '34L',
      projectStatus: 'New Launch',
      roomVariation: '2,3 BHK',
      roomSize: '331 Sq.Ft (Carpet)',
      alt: 'Demo2'
    },
    {
      id: '3',
      projectName: 'Amaze Heights',
      projectImg: '../../../assets/images/propyDemo3.jpg',
      projectLocation: 'Palghar West, Thane',
      priceTo: '23L',
      priceFrom: '34L',
      projectStatus: 'New Launch',
      roomVariation: '2,3 BHK',
      roomSize: '331 Sq.Ft (Carpet)',
      alt: 'Demo2'
    },
    {
      id: '3',
      projectName: 'Queen Tower',
      projectImg: '../../../assets/images/propyDemo4.jpg',
      projectLocation: 'Palghar West, Thane',
      priceTo: '23L',
      priceFrom: '34L',
      projectStatus: 'New Launch',
      roomVariation: '2,3 BHK',
      roomSize: '331 Sq.Ft (Carpet)',
      alt: 'Demo2'
    }
  ]

}
