import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    //Todo guards
    loadChildren: () => import('./auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    //Todo guards
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: '**',
    redirectTo: 'auth',
  },
];
