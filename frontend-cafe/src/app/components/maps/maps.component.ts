import { Component } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

(mapboxgl as any).accesToken = '';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css'
})
export class MapsComponent {

}
