import { Injectable } from '@angular/core';
import { MenuOption } from '../models/menu-items';

@Injectable({
  providedIn: 'root',
})

export class MenuService {
  private menuOptions: MenuOption[] = [
    { name: 'Home', url: 'home', icon: 'home' },
    { name: 'Payments', url: 'payment', icon: 'info' },
    { name: 'Accounts', url: 'accounts', icon: 'contact_mail' }
  ];

  constructor() { }

  getMenuOptions(): MenuOption[] {
    return this.menuOptions;
  }
}
