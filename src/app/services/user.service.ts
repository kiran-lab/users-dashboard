import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

const dummyUsers = [{
    name: 'Test',
    email: 'test@gmail.com',
    role: 'Editor'
  }, {
    name: 'John Doe',
    email: 'john@gmail.com',
    role: 'Viewer'
  }, {
    name: 'Tim Lee',
    email: 'tim@gmail.com',
    role: 'Admin'
  }, {
    name: 'Admin',
    email: 'admin@gmail.com',
    role: 'Admin'
  }, {
    name: 'Tom',
    email: 'tom@gmail.com',
    role: 'Viewer'
  }];

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users$ = new BehaviorSubject<User[]>(dummyUsers);

  constructor() { }

  addUser(user: User){
    const currentUsers = this.users$.value;
    this.users$.next([...currentUsers,user]);
  }

  getUsers(){
    return this.users$.asObservable();
  }
  
}
