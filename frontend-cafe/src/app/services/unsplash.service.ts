import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UnsplashService {
  private accessKey = '51SUWtINXTEGv3RPt3H35D6dfEzCFedWLtvc4YUgPmk';

  constructor() { }

  async getHousePhotos(count: number = 9) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: `Client-ID ${this.accessKey}`
      },
      params: {
        query: 'house',
        per_page: count
      }
    });
    return response.data.results;
  }
}
