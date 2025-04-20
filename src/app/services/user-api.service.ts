import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IUser,
  TLoginUser,
  TRegisterUser,
  TUserReturn,
  TUserWithToken,
} from '../../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  private BASE_URL = 'https://the-developers-website-fake-api.onrender.com';

  constructor(private http: HttpClient) {}

  getUser() {
    if (typeof window !== 'undefined') {
      const userId = localStorage.getItem('@USERID');
      const token = localStorage.getItem('@TOKEN');
      const parsedUserId = JSON.parse(userId as string);
      const parsedToken = JSON.parse(token as string);

      if (userId) {
        return this.http.get<TUserWithToken>(
          `${this.BASE_URL}/api/users/${parsedUserId}`,
          {
            headers: {
              Authorization: `Bearer ${parsedToken}`,
            },
          }
        );
      }
    }

    return null;
  }

  registerUser(data: TRegisterUser) {
    return this.http.post<TUserReturn>(
      `${this.BASE_URL}/api/users/register`,
      data
    );
  }

  loginUser(data: TLoginUser) {
    return this.http.post<TUserWithToken>(
      `${this.BASE_URL}/api/users/login`,
      data
    );
  }

  deleteUser() {
    const userId = localStorage.getItem('@USERID');
    const token = localStorage.getItem('@TOKEN');
    const parsedUserId = JSON.parse(userId as string);
    const parsedToken = JSON.parse(token as string);

    if (userId) {
      return this.http.delete(`${this.BASE_URL}/api/users/${parsedUserId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
    } else {
      return null;
    }
  }
}
