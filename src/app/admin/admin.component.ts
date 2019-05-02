import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FetchService} from '../fetch.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  localHistory=[]; //to store the search history of the user
  Articles=[];   
  tag={
    tagName:""
  };
  suggestedTags="";
  time="";
  sTag={
    tagName:""
  };

  constructor(private _fetch  : FetchService,
              private _router : Router) {
  }

  ngOnInit() {
  }

  //search function to call the fetchArticle method of the fetch service in order to get the data from the backend
  search(){

      this.localHistory=JSON.parse(localStorage.getItem("name"));
      this.localHistory.push(this.tag.tagName);
      localStorage.setItem("name", JSON.stringify(this.localHistory));
      this._fetch.fetchArticle(this.tag)
      .subscribe(
        res=>{
           this.Articles=res[0];
           this.suggestedTags=res[1];
           this.time=res[2];
           console.log(this.Articles);
           console.log(this.suggestedTags);

          // this._router.navigate(['/article',res]);
        },err=>{
          console.log('error in routing to article')
        }
      )
  }

  //search function to call the fetchArticle method of the fetch service in order to get the data from the backend
  //when user clicks on any of the related tag.

  newSearch(taggg){
    this.localHistory=JSON.parse(localStorage.getItem("name"));
    this.localHistory.push(taggg);
    localStorage.setItem("name", JSON.stringify(this.localHistory));
    this._fetch.fetchArticle({tagName:taggg})
    .subscribe(
      res=>{
         this.Articles=res[0];
         this.suggestedTags=res[1];
         this.time=res[2];
         console.log(this.Articles);
         console.log(this.suggestedTags);

      },err=>{
        console.log('error in routing to article')
      }
    )
  }

}
