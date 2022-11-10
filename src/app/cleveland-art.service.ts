import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ClevelandArtReply } from './cleveland-art-reply';

@Injectable({
  providedIn: 'root'
})
export class ClevelandArtService {

  constructor(private http: HttpClient) { }

  getArtwork(): Observable<ClevelandArtReply> {
    return this.http.get<ClevelandArtReply>('https://openaccess-api.clevelandart.org/api/artworks/?type=Painting&has_image=1');
  }
}
