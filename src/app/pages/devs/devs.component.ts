import { Component, Input } from '@angular/core';
import { IDev } from '../../../interfaces/dev.interface';
import { TitlesectionComponent } from '../../components/sections/titlesection/titlesection.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { CommentCardComponent } from '../../components/sections/comment-card/comment-card.component';
import { CommentService } from '../../services/comment.service';
import { CommentFormComponent } from '../../components/comment-form/comment-form.component';

@Component({
  selector: 'app-devs',
  imports: [
    TitlesectionComponent,
    RouterLink,
    CommonModule,
    CommentCardComponent,
    CommentFormComponent,
  ],
  templateUrl: './devs.component.html',
  styleUrl: './devs.component.css',
})
export class DevsComponent {
  title = 'Meet the Team';
  devIdNumber: number = 0;
  @Input() dev!: IDev;

  constructor(
    private userService: UserService,
    public commentService: CommentService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params) => {
      const devId = params.get('devId');
      if (devId) {
        this.loadComments(+devId);
        this.devIdNumber = +devId;
      }
    });
  }

  get user() {
    return this.userService.getUser();
  }

  private loadComments(devId: number): void {
    this.commentService.loadComments(devId);
    this.allComments.set(this.commentService.comments());
  }

  get allComments() {
    return this.commentService.comments;
  }
}
