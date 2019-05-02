import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  //using localStorage to store the search history of the user.

  local=JSON.parse(localStorage.getItem("name"));
  constructor() { }
  ngOnInit() {
  }

}
