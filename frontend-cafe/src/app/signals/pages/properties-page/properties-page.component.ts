import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent {
  public user = signal<User>({
    id: 1,
    email: 'le@gmail.com',
    first_name: 'Gato',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1.img.jpg',
  });

  public fullName = computed(
    () => `${this.user().first_name}, ${this.user().last_name}`
  );

  onFieldUpload(field: keyof User, value: string) {
    // this.user.set({
    //   ...this.user(),
    //   [field]: value,
    // });
    this.user.update((current) => {
      switch (field) {
        case 'id':
          current.id = Number(value);
          break;
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.email = value;
          break;
      }

      return current;
    });
  }
}
