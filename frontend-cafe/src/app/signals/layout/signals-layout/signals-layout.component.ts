import { Component, signal } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-signals-layout',
  standalone: true,
  imports: [MatSidenavModule],
  templateUrl: './signals-layout.component.html',
  styleUrl: './signals-layout.component.css'
})
export class SignalsLayoutComponent {

  public toggleSignal = signal<boolean>(false);

  toggleMenu() {
    throw new Error('Method not implemented.');
  }

  isExpanded: boolean = true;
}
