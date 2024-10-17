import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accesToken = '';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('map') public divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'Element didnt find';

    const map = new mapboxgl.Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      projection: 'globe', // Display the map as a globe, since satellite-v9 defaults to Mercator
      zoom: 1,
      center: [30, 15],
    });
  }
}
