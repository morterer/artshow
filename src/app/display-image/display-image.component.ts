import { Component, OnInit } from '@angular/core';

import { ClevelandArtReply } from '../cleveland-art-reply';
import { ClevelandArtService } from '../cleveland-art.service';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.scss']
})
export class DisplayImageComponent implements OnInit {
  // https://www.angularjswiki.com/angular/property-has-no-initializer-and-is-not-definitely-assigned-in-the-constructor/
  // https://bobbyhadz.com/blog/typescript-interface-empty-object
  artReply: ClevelandArtReply = {} as ClevelandArtReply; // make the compiler shut up about the this that IS going to be initialized
  imageUrl: string = 'https://cdn.shopify.com/s/files/1/2524/0922/files/TheClevelandMuseumofArt_4bars_2925white_cmyk.jpg';

  constructor(private artService: ClevelandArtService) { }

  ngOnInit(): void {
    this.artService.getArtwork()
      .subscribe(response => {
        // reponse is typed to ClevelandArtReply
        this.artReply = response;
        // explicitly show a first image instead of waiting for the
        // setInternal below to fire for the first time
        this.next();
      });
      setInterval(() => this.next(), 1000 * 60 * 2);
  }

  next(): void {
    console.log(this.artReply);
    let randomIndex: number = (Math.floor(Math.random() * this.artReply.data.length));
    // the service has an option that only gets responses with images
      this.imageUrl = this.artReply.data[randomIndex].images.web.url;

  }
}
