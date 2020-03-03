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
  imageUrl: string;

  constructor(private clevelandArtService: ClevelandArtService) { }

  ngOnInit() {
    this.clevelandArtService.getArtwork()
      .subscribe(response => {
        this.artData = response.data;
        this.next();
      });
      setInterval(() => this.next(), 1000 * 60);
  }

  next(): void {
    // TODO: check and handle case where there's no 'print' property
    // if there's image, remove the entry from artData
    this.imageUrl = this.artData[Math.floor(Math.random() * this.artData.length)]['images']['print']['url'];
    // console.log('currentArt: ', this.imageUrl);
  }

  clickEvent(): void {
    console.log("Click");
  }
}

// TODO: add click event that loads a new image
// TODO: pop an image out of the artData array when it has been displayed
// TODO: when the artData array is empty, refill with new images (skip parameter)
