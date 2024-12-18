import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MenuOption } from '../../models/menu-items';
@Component({
  selector: 'sidenav-menu',
  standalone: true,
  imports: [MatButtonModule, CommonModule, MatIconModule],
  templateUrl: './sidenav-menu.component.html',
  styleUrl: './sidenav-menu.component.css',
})
export class SidenavMenuComponent {
  items = input<MenuOption[]>();
  public menuItems = signal<MenuOption[]>([
    { name: 'Properties', url: 'home', icon: 'house' },
    {
      name: 'Signals',
      url: 'signals',
      icon: 'sensors',
      subMenu: [
        { name: 'Counter', icon: '', url: '/signals/counter' },
        { name: 'Properties', icon: '', url: '/signals/properties' },
        { name: 'User info', icon: '', url: '/signals/user-info' },
      ],
    },
    { name: 'Forms & Directives', url: 'directives', icon: 'description' },
  ]);

  constructor(private router: Router) {}

  navigate(item: MenuOption) {
    this.router.navigate([`${item.url}`]);
  }
}
