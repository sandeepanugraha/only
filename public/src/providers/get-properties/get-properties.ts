import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GetPropertiesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GetPropertiesProvider {
  public data:any;
  constructor(public http: Http) {
  }
  getProperties(offset){
    return new Promise(resolve=>{
      this.http.get('http://localhost/only/appartments/get?offset='+offset).map(res=>res.json()).subscribe(data=>{
        this.data = data.data;
          resolve(this.data);
      })
    });
  }
}
