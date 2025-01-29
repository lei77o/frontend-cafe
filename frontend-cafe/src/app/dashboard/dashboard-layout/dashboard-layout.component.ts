import { Component, computed, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { SidenavMenuComponent } from '../../components/sidenav-menu/sidenav-menu.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    ToolbarComponent,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    SidenavMenuComponent,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
})
export class DashboardLayoutComponent {
  private authService = inject(AuthService);
  public user = computed(() => this.authService.currentUser());
}
