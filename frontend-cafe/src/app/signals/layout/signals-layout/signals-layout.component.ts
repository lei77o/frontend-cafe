import { Component } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css'
})
export class SignalsLayoutComponent {
  showFiller = false;
}
