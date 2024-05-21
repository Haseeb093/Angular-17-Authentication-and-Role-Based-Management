import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})

export class HelperService {

  private user!: User;

  constructor() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  public get getLogInUser() {
    return this.user;
  }

  public set setLogInUser(user: any) {
    this.user = user;
  }

  isUserLoggedIn() {
    return this.user === null ? false : true;
  }

  getUserToken(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    });
  }

  getRole() {
    return this.user.role ?? [];
  }

  getUserName(): string {
    return this.user.username!;
  }
}
