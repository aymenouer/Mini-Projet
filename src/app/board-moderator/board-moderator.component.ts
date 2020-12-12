import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {EventService} from '../services/event.service';
import {Event} from '../models/Event';
@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {
  content?: string;
  nombre_events: number;
  type_category:string;
  active_pipe: boolean;

  name_event: string;
  listEvents: Event[];
  constructor(private userService: UserService, private Eventservice: EventService) { }

  ngOnInit(): void {

    this.name_event = '' ;

    this.Eventservice.getEvents().subscribe(
      (data: Event[] ) =>
      {
        this.listEvents = data;
        this.nombre_events = this.listEvents.length;



      }
    );

    this.userService.getModeratorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  change_type_categorie( type: string )
  {
    // tslint:disable-next-line:triple-equals
    if (type == 'ALL')
      this.active_pipe=false;
    else
      this.active_pipe=true;

    this.type_category = type;

  }
}
