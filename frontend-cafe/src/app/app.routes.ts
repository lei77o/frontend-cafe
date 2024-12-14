import { Routes } from '@angular/router';
import { LoginPageComponent } from './auth/components/login-page/login-page.component';
import { RegisterPageComponent } from './auth/components/register-page/register-page.component';
import { AuthLayoutComponent } from './auth/layouts/auth-layout/auth-layout.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { DirectivesComponent } from './pages/directives/directives.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginPageComponent },
      {
        path: 'register',
        component: RegisterPageComponent,
      },
      { path: '**', redirectTo: 'login' },
    ],
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home',
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    title: 'Contacto',
  },
  {
    path: 'info',
    component: AcercaComponent,
    title: 'Acerca de',
  },
  {
    path: 'directives',
    component: DirectivesComponent,
    title: 'Forms & Directives',
  },
  {
    path: 'signals',
    loadChildren: () =>
      import('./signals/signals.module').then((m) => m.SignalsModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export default routes;
