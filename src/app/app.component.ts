import { Component, OnInit } from '@angular/core';
import { CommentModel } from './models/comment.model';
import { CommentsService } from './services/comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  comments: CommentModel[] = [];

  constructor(private commentsService: CommentsService) {
  }

  async ngOnInit(): Promise<void> {
    this.comments = await this.commentsService.getComments();
  }
}
