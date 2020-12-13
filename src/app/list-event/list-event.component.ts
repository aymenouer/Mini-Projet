import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Event} from '../models/Event';
import {EventService} from '../services/event.service';
import {MatDialog} from '@angular/material/dialog';
import {TokenStorageService} from '../services/token-storage.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.css']
})
export class ListEventComponent implements OnInit {
  listEvents: Event[];
  @Input() name_event: string;
  @Input() type_category: string;
  @Input() active_pipe: boolean;
  @Output() notif = new EventEmitter<number>();
  role: string;
  currentUser: any;
  open_add: boolean;
  constructor(private Eventservice: EventService, private token: TokenStorageService) { }
  ngOnInit(): void {
    this.listEvents = [];
    this.open_add = false;
    this.currentUser = this.token.getUser();
    this.role = this.currentUser.roles[0];
    this.Eventservice.getEvents().subscribe(
      (data: Event[] ) =>
      {
        this.listEvents = data;



      }
    );
    // tslint:disable-next-line:prefer-for-of

  }
  // tslint:disable-next-line:typedef

  pushEvent(Event: Event)
  {
    this.open_add = false;
    this.Eventservice.getEvents().subscribe(
      (data: Event[] ) =>
      {
        this.listEvents = data;

        console.log(data);

      },
      () => {},
      () => {
        this.notif.emit(this.listEvents.length);
      }
    );

  }
    delete_Events (Event: Event)
    {
      console.log("aaaaaaa");
      this.Eventservice.getEvents().subscribe(
        (data: Event[] ) =>
        {
          this.listEvents = data;

          console.log(data);

        },
      () => {},
        () => {
          this.notif.emit(this.listEvents.length);
        }
      );

    this.open_add = false;
  }
   open_add_()
  {
    if ( this.open_add == true) {
      this.open_add = false;
    }
    else {  this.open_add = true; }

  }
}
