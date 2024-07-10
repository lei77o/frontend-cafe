import { Component } from '@angular/core';

interface MenuItem {
  title: string,
  router: string
}

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] =[
    {
      title: 'Counter',
      router: 'counter'
    },
    {
      title: 'User',
      router: 'user-info'
    },
    {
      title: 'Mutation',
      router: 'properties'
    }
]
}
