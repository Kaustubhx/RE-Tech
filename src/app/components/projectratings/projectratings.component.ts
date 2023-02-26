import { Component, OnInit } from '@angular/core';
import { projectsDetails } from 'src/app/services/detailPageData.service';

@Component({
  selector: 'ProjectRatings',
  templateUrl: './projectratings.component.html',
  styleUrls: ['./projectratings.component.css']
})
export class ProjectratingsComponent implements OnInit {

  constructor(private detailData: projectsDetails) { }

  scrollListText: any

  ngOnInit(): void {
    this.scrollListText = this.detailData.scrollListOptions
  }

  listSlideOpt = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    slidesPerView: 2,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        // spaceBetween: 5
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 4,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 6
      },
      1440: {
        slidesPerView: 8
      }
    }

  }
}
