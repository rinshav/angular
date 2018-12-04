import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title:string = "My Home Page";
  name:string = "Rinsha";
  products:any[] = [
    {
      "productId":1,
      "productName":"Leaf Rake",
      "productCode":"GDN-0011",
    },
    {
      "productId":2,
      "productName":"Testing Product",
      "productCode":"GDN-0012",

    },
    {
      "productId":3,
      "productName":"Testing",
      "productCode":"GDN-0013",
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
