import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Response } from "@angular/http";
// import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import { Icustomers } from "./product";

@Injectable()
export class ProductService {
  private _productUrl = "http://localhost:8080/myjson/products.json";
  constructor(private _http: Http) {}

  getProducts(): Observable<Icustomers[]> {
    return this._http
      .get(this._productUrl)
      .map((response: Response) => <Icustomers[]> response.json())
      .do(data => console.log("All data here:" + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(error.json().error || "api error");
  }
}
