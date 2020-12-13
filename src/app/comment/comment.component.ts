import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Comment} from '../models/Comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  @Input() comment: Comment;
  @Output() notifacation = new EventEmitter<Comment>();
  constructor() { }

  ngOnInit(): void {
  }

}
