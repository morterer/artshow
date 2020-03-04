import { Component, OnInit } from '@angular/core';

import { ClevelandArtService } from '../cleveland-art.service';
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';

@Component({
  selector: 'app-display-art',
  templateUrl: './display-art.component.html',
  styleUrls: ['./display-art.component.scss']
})
export class DisplayArtComponent implements OnInit {

  artData: [];
  imageUrl = './assets/cmalogo.png';

  constructor(private clevelandArtService: ClevelandArtService) { }

  ngOnInit() {
    this.clevelandArtService.getArtwork()
      .subscribe(response => {
        // take the server response and copy the array of image data to artData
        this.artData = response.data;
        // explicitly show a first image instead of waiting for the
        // setInternal below to fire for the first time
        this.next();
      });
      setInterval(() => this.next(), 1000 * 60 * 2);
  }

  next(): void {
    this.imageUrl = this.artData[Math.floor(Math.random() * this.artData.length)]['images']['print']['url'];
  }
}


