import { Injectable, signal } from '@angular/core';
import {
  IComment,
  TCommentCreate,
  TReturnComment,
} from '../../interfaces/comment.interface';
import { CommentApiService } from './comment.api.service';

@Injectable({ providedIn: 'root' })
export class CommentService {
  readonly comments = signal<IComment[]>([]);
  readonly isLoading = signal<boolean>(false);
  readonly errorMessage = signal<string | null>(null);

  constructor(private commentApi: CommentApiService) {}

  loadComments(devId: number) {
    this.isLoading.set(true);

    return this.commentApi.loadComments(devId).subscribe({
      next: (apiComments) => {
        this.comments.set(apiComments);
        this.isLoading.set(false);
      },
      error: () => {
        this.isLoading.set(false);
      },
    });
  }

  addComment(data: TCommentCreate, devId: number) {
    this.commentApi.addComment(data, devId)?.subscribe({
      next: () => {
        this.loadComments(devId);
      },
      error: (err) => {
        console.log('Failed to add comment', err);
      },
    });
  }

  deleteComment(commentId: number) {
    return this.commentApi.deleteComment(commentId)?.subscribe(() => {
      this.comments.update((prevComments) =>
        prevComments.filter((comment) => comment.id !== commentId)
      );
    });
  }
}
