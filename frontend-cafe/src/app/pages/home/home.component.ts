import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { HousingLocationComponent } from '../../components/housing-location/housing-location.component';
import { HousingLocation } from '../../models/housinglocation';
import { UnsplashService } from '../../services/unsplash.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent, MatInputModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common';
  housingLocations: HousingLocation[] = [];

  constructor(private unsplashService: UnsplashService) {}

  ngOnInit(): void {
    this.loadHousePhotos();
  }

  async loadHousePhotos() {
    const photos = await this.unsplashService.getHousePhotos(9);
    photos.map(
      (photo: { id: any; alt_description: any; urls: { small: any } }) => {
        console.log(photos);
        this.housingLocations.push({
          id: photo.id,
          name: photo.alt_description,
          city: 'Santa Fe',
          state: 'Santa Fe',
          photo: photo.urls.small,
          availableUnits: 1,
          wifi: true,
          laundry: true,
        });
      }
    );
  }
}
