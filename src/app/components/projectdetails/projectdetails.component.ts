import { Component, OnInit } from '@angular/core';
import { projectsDetails } from 'src/app/services/detailPageData.service';

@Component({
  selector: 'ProjectOverview',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {

  constructor(private projectsPageData: projectsDetails) { }

  projectData: any;

  ngOnInit(): void {
    this.projectData = this.projectsPageData;
    // console.log(this.overviewData.overviewSectionData[0].propybuddyRegNumber)
    console.log(this.projectData.projects[0])
  }

}
