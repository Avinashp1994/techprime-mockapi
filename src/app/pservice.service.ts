import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PserviceService {

  path = "http://localhost:3000/user";

  constructor(private _htt: HttpClient) { }

  addData(x):any{
    this._htt.post("this.path",x);
  }



}
