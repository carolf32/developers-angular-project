import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  IComment,
  TCommentCreate,
  TReturnComment,
} from '../../interfaces/comment.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentApiService {
  private BASE_URL = 'https://the-developers-website-fake-api.onrender.com';

  constructor(private http: HttpClient) {}

  loadComments(devId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      `${this.BASE_URL}/api/devs/${devId}/comments`
    );
  }

  addComment(data: TCommentCreate, devId: number) {
    const token = localStorage.getItem('@TOKEN');

    if (token) {
      const parsedToken = JSON.parse(token);

      return this.http.post<TReturnComment>(
        `${this.BASE_URL}/api/devs/${devId}/comments`,
        data,
        {
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        }
      );
    } else {
      return null;
    }
  }

  deleteComment(commentId: number) {
    const token = localStorage.getItem('@TOKEN');

    if (token) {
      const parsedToken = JSON.parse(token);

      return this.http.delete(`${this.BASE_URL}/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
    } else {
      return null;
    }
  }
}
