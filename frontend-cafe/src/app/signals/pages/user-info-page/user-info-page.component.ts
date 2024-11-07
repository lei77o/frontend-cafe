import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../../services/users.services';
import { User } from '../../../models/user.interface';

@Component({
  selector: 'app-user-info-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit{
  private userService = inject(UserService);
  public userId = signal(1);

  public currentUser = signal<User | undefined>(undefined);
  
  public userFound = signal(true);
  
  public fullName = computed<string>(()=>{
    if(!this.currentUser()) return 'User not found';
    return `${this.currentUser()?.first_name}, ${this.currentUser()?.last_name}`
  });

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number){
    if(id <= 0) return;
    this.userId.set(id);

    this.userService.getUserById(id).subscribe({
      next: (user)=>{
        this.currentUser.set(user);
        this.userFound.set(false);
      },
      error: () => {
        this.userFound.set(true);
        this.currentUser.set(undefined)
      }
    }
    );
  }
}
