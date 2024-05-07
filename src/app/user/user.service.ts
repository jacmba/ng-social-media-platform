import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {id: 1, name: "John Doe"},
    {id: 2, name: "Maria Doe"}
  ]

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
}
