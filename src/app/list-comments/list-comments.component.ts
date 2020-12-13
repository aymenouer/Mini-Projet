import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Event} from '../models/Event';
import {Comment} from '../models/Comment';
import {CommentService} from '../services/comment.service';
import {ActivatedRoute} from '@angular/router';
import {EventService} from '../services/event.service';
@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.css']
})
export class ListCommentsComponent implements OnInit {
  content: string;
  event: Event;
  listComments: Comment[];
  constructor(private serviceEvent: EventService,private service: ActivatedRoute,private userService: UserService, private Commentservice: CommentService) { }

  ngOnInit(): void {

    this.serviceEvent.getEvent(this.service.snapshot.params.id).subscribe(
      (data: Event) => {
        this.event = data;
      },
      (err) => {

      },
      () => {
        this.Commentservice.getComments(this.event.id).subscribe(
          (data: Comment[] ) =>
          {
            this.listComments = data;



          }
        );
      },
    );
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );

  }

// tslint:disable-next-line:typedef
  update(event)
{
  this.Commentservice.getComments(this.event.id).subscribe(
    (data: Comment[] ) =>
    {
      this.listComments = data;



    }
  );
}

}
