import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/mockData.js"


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  constructor() { }
    listData = data;
  ngOnInit(): void {
    console.log(this.listData);

  }

}
