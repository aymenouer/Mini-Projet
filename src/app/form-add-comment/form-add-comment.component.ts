import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {Comment} from '../models/Comment';
import {User} from '../models/User';
import {TokenStorageService} from '../services/token-storage.service';
import {CommentService} from '../services/comment.service';
@Component({
  selector: 'app-form-add-comment',
  templateUrl: './form-add-comment.component.html',
  styleUrls: ['./form-add-comment.component.css']
})
export class FormAddCommentComponent implements OnInit {
  @Input() id_event :string;
  @Output() notifi= new EventEmitter<Comment>();

  CommentForm: FormGroup;
  constructor( private token: TokenStorageService, private serviceComment: CommentService) { }

  ngOnInit(): void {
    this.CommentForm = new FormGroup({
      contenu: new FormControl('', [Validators.required])
       });
  }
  onSubmit()
  {
    let comment = new Comment();
    comment.contenu = this.CommentForm.get('contenu').value;

 let user = new User();
    user.id = this.token.getUser().id;
    comment.users =user;


    this.serviceComment.addComment(comment, this.id_event).subscribe(
      (res: Comment) => {

   console.log(res);

      },
      error => console.log(error),
      () => {
        this.notifi.emit(comment);
      }
    );



  }

}
