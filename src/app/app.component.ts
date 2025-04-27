import { Component } from '@angular/core';
import { User } from './models/user.model';
import { UserService } from './services/user.service';
import { FormControl } from '@angular/forms';
import { debounceTime, delay, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';
  users: User[] = [];
  allUsers: User[] = [];
  roles = ['Admin','Editor','Viewer'];
  rolesData: number[] = [];
  searchUser = new FormControl('');
  loading: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().pipe(tap(() => {
      this.loading = true;
      }),
      delay(1000))
      .subscribe({
        next: (response) => {
          if (response !== null)
          this.users = [...response];
          this.allUsers = [...response];
          this.rolesData = this.getRolesCount();
          this.loading = false;
        }
      , error: () => {
          this.users = [];
          this.allUsers = [];
          this.loading = false;
      }});
    this.searchUser.valueChanges.pipe(debounceTime(2000))
      .subscribe((response)=>{
        if(response === ''){
          this.users = [...this.allUsers];
        }
        else{
          let filteredUsers = this.users.filter(item => item.name.includes(response || ''))
          this.users = [...filteredUsers]
        }
    })
  }

  getRolesCount(): number[]{
    const roleCounts = this.roles.map(role =>
      this.users.filter(user => user.role === role).length
    );
    return roleCounts;
  }
}
