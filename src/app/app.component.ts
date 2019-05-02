import { Component } from '@angular/core';
import {FetchService} from './fetch.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'front';
  constructor(private _fetchService: FetchService){}

}
