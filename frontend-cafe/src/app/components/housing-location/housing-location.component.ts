import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MapsComponent } from '../../components/maps/maps.component';
import { HousingLocation } from '../../models/housinglocation';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MapsComponent,
  ],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css',
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation[];
  readonly dialog = inject(MatDialog);

  openLocation() {
    const dialogRef = this.dialog.open(MapsComponent, {
      data: { latitud: '', lng: '' },
    });
  }
}
