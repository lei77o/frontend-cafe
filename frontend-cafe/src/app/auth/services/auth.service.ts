import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { User } from '../../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl = environment.BASE_URL;
  private http = inject(HttpClient);

  private currentUser = signal<User | null>(null);
  private authStatus = signal<AuthSatus>();

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    return of(true);
  }
}
