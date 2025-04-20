import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IComment } from '../../../../interfaces/comment.interface';
import { UserService } from '../../../services/user.service';
import { CommentService } from '../../../services/comment.service';

@Component({
  selector: 'app-comment-card',
  imports: [CommonModule],
  templateUrl: './comment-card.component.html',
  styleUrl: './comment-card.component.css',
})
export class CommentCardComponent {
  @Input() comment!: IComment;

  constructor(
    private userService: UserService,
    private commentService: CommentService
  ) {}

  get userName(): string | null {
    return this.userService.getUserNameById(this.comment.user.id);
  }

  get id(): number {
    return this.userService.getUserId();
  }

  handleDelete() {
    return this.commentService.deleteComment(this.comment.id);
  }
}
