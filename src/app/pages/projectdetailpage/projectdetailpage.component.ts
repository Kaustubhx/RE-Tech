import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonContent } from '@ionic/angular';
import { projectsDetails } from 'src/app/services/detailPageData.service';

@Component({
  selector: 'app-projectdetailpage',
  templateUrl: './projectdetailpage.component.html',
  styleUrls: ['./projectdetailpage.component.css']
})
export class ProjectdetailpageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private projectsPageDetails: projectsDetails) { }

  @ViewChild(IonContent, { read: IonContent, static: false }) myContent!: IonContent;

  //Abhi
  scrollTo(id: any) {
    let y = document.getElementById(id).offsetTop;
    this.myContent.scrollToPoint(0, y - 1, 500);
    console.log(typeof y)
    console.log(y)
  }

  //StackOverflow
  // scrollTo(id: any) {
  //   var element = document.getElementById(id);
  //   var headerOffset = 45;
  //   var elementPosition = element.getBoundingClientRect().top;
  //   var offsetPosition = elementPosition + window.pageYOffset;
  //   console.log(offsetPosition)
  //   console.log(elementPosition)

  //   window.scrollTo({
  //     top: offsetPosition,
  //     behavior: "smooth"
  //   });
  // }



  listSlideOpt = {
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


  projectData: any;
  projectImagesTypes: any;
  scrollListText: any;

  projectId: any;
  ngOnInit(): void {
    let id = this.route.snapshot.params['id']
    this.projectData = this.projectsPageDetails.getById(id);

    //For Scrolllist
    this.scrollListText = this.projectsPageDetails.scrollListOptions

    //For ProjectImages
    // for (const items of this.projectData.projectImages) {
    //   console.log(items.img)
    // }

    // For Amenities
    for (let i = 0; i < this.projectData.projectAmenities.length; i++) {
      const element = this.projectData.projectAmenities[i];
      console.log(element.amenitieList)
    }

    for (const items of this.projectData.projectAmenities) {
      console.log(items.amenitieList)
    }

  }

}
