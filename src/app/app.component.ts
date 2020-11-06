import { Component, OnInit } from '@angular/core';
import { ProductserviceService} from '../app/productservice.service';
import {Observable} from 'rxjs/observable';
import { PserviceService } from '../app/pservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductserviceService]
})
export class AppComponent implements OnInit {
  
  emp:any;
   model :any ={};

  constructor(private _productser: ProductserviceService,
    private _pservice: PserviceService){
    
  }

  submit(){
    this._pservice.addData(this.model).subscribe((d)=>this.emp=d);
    this.model={};
    console.log("True");
  }

  ngOnInit(){
    this.emp=this._productser.getproducts();
  }

}
