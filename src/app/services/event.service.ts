import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Event} from '../models/Event';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  url = 'http://localhost:8080/api/Event/';
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef
  addEvent(event: Event)
  {
    return this._httpClient.post(this.url , event );
  }
  getEvents()
  {
    return this._httpClient.get(this.url);
  }
  deleteEvent(id: string)
  {
    return this._httpClient.delete(this.url + id);
  }
  valideEvent(id: string)
  {
    return this._httpClient.put(this.url + 'valide/' + id, ' ');
  }
  // tslint:disable-next-line:typedef
  getEvent( id: string )
  {
    return this._httpClient.get(this.url + id );
  }

  participerEvent ( user_id: string , event_id: string)
  {
    console.log(this.url + 'participer/' + user_id + '/' + event_id);
    return this._httpClient.get( this.url + 'participer/' + user_id + '/' + event_id).subscribe(
      res => console.log(res),
      error => console.log(error)
    );




  }
  verifier_participation ( user_id: string , event_id: string)
  {
    return this._httpClient.get( this.url + user_id + '/' + event_id );

  }
  delete_participation ( user_id: string , event_id: string)
  {
    console.log(this.url + 'delete/' + user_id + '/' + event_id);
    return this._httpClient.delete( this.url + 'delete/' + user_id + '/' + event_id ).subscribe(
      res => console.log(res),
      error => console.log(error)
    );

  }
}
