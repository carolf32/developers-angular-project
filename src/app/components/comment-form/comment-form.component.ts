import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommentService } from '../../services/comment.service';
import { TCommentCreate } from '../../../interfaces/comment.interface';

@Component({
  selector: 'app-comment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css',
})
export class CommentFormComponent {
  constructor(private commentService: CommentService) {}
  @Input() devId!: number;

  commentForm = new FormGroup({
    content: new FormControl(null, [Validators.required]),
    user: new FormControl(null),
    date: new FormControl(null),
  });

  submit() {
    const userId = localStorage.getItem('@USERID');
    const parsedUserId = JSON.parse(userId as string);
    const formData = this.commentForm.value;

    const data: TCommentCreate = {
      content: formData.content ?? '',
      devId: this.devId,
      userId: parsedUserId,
    };

    this.commentService.addComment(data, this.devId);
    this.commentForm.reset();
  }
}
