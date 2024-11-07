import { CommonModule } from '@angular/common';
import { Component, computed, effect, OnDestroy, OnInit, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { User } from '../../../models/user.interface';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule],
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.css',
})
export class PropertiesPageComponent implements OnDestroy, OnInit {
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

  public counter = signal(10);

  public userChangedEffect = effect(()=>{
    console.log(`${this.user().first_name} - ${this.counter()}`)
  })

  onFieldUpload(field: keyof User, value: string) {
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

  increaseBy(value: number){
    this.counter.update(current => current + value)
  }

  ngOnInit(): void {
      setInterval(()=>{
        this.counter.update(current => current + 1);
        if(this.counter() === 15)
          this.userChangedEffect.destroy();
      }, 1000)
  }

  ngOnDestroy(): void {
      this.userChangedEffect.destroy();
  }
}
