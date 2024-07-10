import { Injectable } from '@angular/core';
import { MenuOption } from '../models/menu-items';

@Injectable({
  providedIn: 'root',
})

export class MenuService {
  private menuOptions: MenuOption[] = [
    { name: 'Home', url: 'home', icon: 'home' },
    { name: 'Acerca de', url: 'info', icon: 'info' },
    { name: 'Contacto', url: 'contacto', icon: 'contact_mail' },
    { name: 'Signals', url: 'signals', icon: 'sensors' }
  ];

  constructor() { }

  getMenuOptions(): MenuOption[] {
    return this.menuOptions;
  }
}
