import { Injectable, signal } from '@angular/core';
import {
  TLoginUser,
  TRegisterUser,
  TUserReturn,
  TUserWithToken,
} from '../../interfaces/user.interface';
import { UserApiService } from './user-api.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UserService {
  readonly currentUser = signal<TUserReturn | TUserWithToken | null>(null);

  constructor(private userApi: UserApiService, private router: Router) {
    this.initializeUser();
  }

  private initializeUser() {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('@TOKEN');
      const userId = localStorage.getItem('@USERID');

      if (token && userId) {
        this.userApi
          .getUser()
          ?.subscribe((response) => this.currentUser.set(response));
      }
    }
  }

  getUser() {
    return this.currentUser();
  }

  getUserNameById(userId: number): string | null {
    if (typeof window !== 'undefined') {
      const storedName = localStorage.getItem('@USERNAME');
      const storedUserId = localStorage.getItem('@USERID');

      const parsedName = JSON.parse(storedName as string);
      const parsedUserId = JSON.parse(storedUserId as string);

      if (parsedUserId === userId) {
        return parsedName;
      }
    }
    return null;
  }

  getUserId(): number {
    const id = localStorage.getItem('@USERID');
    const parsedId = JSON.parse(id as string);

    return Number(parsedId);
  }

  registerUser(data: TRegisterUser) {
    this.userApi.registerUser(data);
  }

  loginUser(data: TLoginUser) {
    return this.userApi.loginUser(data).subscribe((response) => {
      localStorage.setItem('@TOKEN', JSON.stringify(response.acessToken));
      localStorage.setItem('@USERID', JSON.stringify(response.user.id));
      localStorage.setItem('@USERNAME', JSON.stringify(response.user.name));
      this.currentUser.set(response);
    });
  }

  logoutUser() {
    this.currentUser.set(null);
    localStorage.removeItem('@TOKEN');
    localStorage.removeItem('@USERID');
    localStorage.removeItem('@USERNAME');
    this.router.navigate(['']);
  }

  deleteUser() {
    return this.userApi.deleteUser()?.subscribe(() => {
      this.currentUser.set(null);
      localStorage.removeItem('@TOKEN');
      localStorage.removeItem('@USERID');
      localStorage.removeItem('@USERNAME');
      this.router.navigate(['']);
    });
  }
}
