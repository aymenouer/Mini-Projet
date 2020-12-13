import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Storie} from '../models/Storie';

@Injectable({
  providedIn: 'root'
})
export class StorieService {
  url = 'http://localhost:8080/api/Storie/';
  constructor(private _httpClient: HttpClient) { }
  addStorie(storie: Storie, id_Event: string)
  {
    return this._httpClient.post(this.url + id_Event , storie );
  }

  getStories(id_Event: string)
  {
    return this._httpClient.get(this.url + id_Event  );
  }
}
