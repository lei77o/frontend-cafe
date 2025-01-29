import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './guards/isAuthenticaded.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [isAuthenticatedGuard],
    loadChildren: () =>
      import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
