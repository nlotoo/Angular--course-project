import { Component, OnInit } from '@angular/core';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comments-active-bubble',
  templateUrl: './comments-active-bubble.component.html',
  styleUrls: ['./comments-active-bubble.component.css']
})
export class CommentsActiveBubbleComponent implements OnInit {

  constructor(
    private ServiceComponent: CommentService,
  ) { }

  ngOnInit(): void {
  }

  uername: string | null = localStorage.getItem('email');

  postComment(text: string | null) {
    let userId = localStorage.getItem('User ID');
    let email = localStorage.getItem('email');
    let preObj = {
      itemId: window.location.pathname.slice(6),
      content: text,
      userId: userId,
      email: email,
    };

    this.ServiceComponent.createComment(preObj);
    window.location.reload();
  }
}
