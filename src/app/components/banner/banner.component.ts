import { Component, OnInit } from '@angular/core';
import { HomePageDetails } from 'src/app/services/homePageData.service';

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
  constructor(private homePageDetails: HomePageDetails) { }

  bannerData: any;
  ngOnInit(): void {
    this.bannerData = this.homePageDetails.homePageData[0].banner_details
    console.log(this.bannerData)
  }

}
