import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {


artworkID : number;
isActive : Boolean;
packageStatus : string;
percentComplete: number;

  constructor() { }

  ngOnInit() {
  }

}
