import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FetchService {

  private _fetchUrl="http://localhost:3000/crawl"
  constructor(private http: HttpClient){ }

  //the method for making http calls to the backend
  fetchArticle(tag){
    return this.http.post<any>(this._fetchUrl,tag);
  }
}
