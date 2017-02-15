import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {


packageID : number;
isActive : Boolean;
packageStatus : string;
percentComplete: number;

  constructor() { }

  ngOnInit() {
  }

}
