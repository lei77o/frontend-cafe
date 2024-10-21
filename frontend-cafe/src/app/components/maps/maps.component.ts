import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { environment } from '../../../environments/environment.development';

import mapboxgl, { LngLat, Map, Marker } from 'mapbox-gl';
(mapboxgl as any).accessToken = environment.NG_APP_MAPBOX_KEY;

//(mapboxgl as any).accesToken = '';

@Component({
  selector: 'app-maps',
  standalone: true,
  imports: [
    MatSliderModule,
    CommonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatButtonModule,
  ],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.css',
})
export class MapsComponent implements AfterViewInit {
  readonly dialogRef = inject(MatDialogRef<MapsComponent>);
  readonly houseData = inject<LngLat>(MAT_DIALOG_DATA);

  @ViewChild('map') public divMap?: ElementRef;

  public currentLngLat: LngLat = new LngLat(-60.6973, -31.6107);
  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'Element didnt find';

    console.log(this.houseData as LngLat);
    const copy = this.houseData as LngLat;

    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v9',
      projection: 'globe',
      zoom: this.zoom,
      center: [-60.6973, -31.6107],
    });

    if (this.houseData)
      new Marker().setLngLat(this.currentLngLat).addTo(this.map);
  }

  mapListeners() {
    if (!this.map) throw 'Have no map';

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      const { lng, lat } = this.currentLngLat;
    });
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  zoomIn() {
    this.map?.zoomIn();
  }

  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({
      zoom: 14,
      center: marker.getLngLat(),
    });
  }
}
