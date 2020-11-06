import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  // path ="http://localhost:3000/user";

  constructor(private _ht: HttpClient) { }

 


  getproducts():any {
    return [
      {
        "id": 1,
        "name": "tom",
        "category": "Canvas Print",
        "quantity": 20,
        "price": 600
      },
      {
        "id": 2,
        "name": "mary",
        "category": "Canvas Print",
        "quantity": 40,
        "price": 1200
      },
      {
        "id": 3,
        "name": "alex",
        "category": "Canvas Print",
        "quantity": 80,
        "price": 2400
      },
      {
        "id": 4,
        "name": "nancy",
        "category": "Canvas Print",
        "quantity": 100,
        "price": 23000
      },
      {
        "id": 5,
        "name": "mike",
        "category": "Canvas Print",
        "quantity": 10,
        "price": 300
      },
      {
        "id": 6,
        "name": "steve",
        "category": "Canvas Print",
        "quantity": 25,
        "price": 800
      }
    ]
    
  }



}
