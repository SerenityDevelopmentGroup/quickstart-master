import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {


projectID : number;
isActive : Boolean;
packageStatus : string;
percentComplete: number;

  constructor() { }

  ngOnInit() {
  }

}
