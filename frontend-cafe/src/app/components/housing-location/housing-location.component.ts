import { Component, Input } from '@angular/core';
import { HousingLocation } from '../../models/housinglocation';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatGridListModule, MatIconModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation [];
}
