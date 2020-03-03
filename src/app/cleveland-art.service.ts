import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClevelandArtService {

  constructor(private http: HttpClient) { }

  getArtwork(): Observable<any> {
    return this.http.get('https://openaccess-api.clevelandart.org/api/artworks/?type=Painting&department=Chinese Art&limit=100');
  }
}
