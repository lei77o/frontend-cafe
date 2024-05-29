import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { AccountsComponent } from './pages/accounts/accounts.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'payments',
    component: PaymentsComponent
,
    title: 'Payments',
  },
  {
    path: 'accounts',
    component: AccountsComponent,
    title: 'Accounts',
  },
];

export default routes;
