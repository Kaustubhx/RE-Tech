import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() {
    this.callFunction();
  }

  searchOptions = ['Locatlity', 'Builder', 'City', 'Project', 'Reviews', 'Budget'];

  callFunction() {
    setInterval(() => {
      let dynamicSearchBar: any = document.querySelector('.searchBar');
      let randomOption = Math.floor(Math.random() * (this.searchOptions.length));
      if (randomOption != null) {
        dynamicSearchBar.placeholder = `Search By ${this.searchOptions[randomOption]}`
      }
    }, 5000)
  }

  ngOnInit(): void {
  }

}
