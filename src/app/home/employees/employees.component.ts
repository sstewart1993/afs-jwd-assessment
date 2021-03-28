import { Component, OnInit } from '@angular/core';
import * as data from "../../../assets/mockData.json"

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  constructor() {}
    listData = data;

  ngOnInit(): void {
    // console.log(this.listData);
  }

}
