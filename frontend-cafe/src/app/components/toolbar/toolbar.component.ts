import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MenuService } from '../../services/menu-items.service';
import { MenuOption } from '../../models/menu-items';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports:[
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

  menu: MenuOption[] = [];

  constructor(private menuItem: MenuService,
    private router: Router
  ){
    this.menu = this.menuItem.getMenuOptions();
  }

  navigate(item: MenuOption){
    this.router.navigate([`${item.url}`]);
  }
}
