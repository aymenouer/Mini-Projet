import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Comment} from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'http://localhost:8080/api/Comment/';
  constructor(private _httpClient: HttpClient) { }

  addComment(comment: Comment, id_Event: string)
  {
    return this._httpClient.post(this.url + id_Event , comment );
  }

  getComments(id_Event: string)
  {
    return this._httpClient.get(this.url + id_Event  );
  }
}
