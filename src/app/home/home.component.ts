import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {EventService} from '../services/event.service';
import {Event} from '../models/Event';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content: string;
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


    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
  change_nombre(num : number)
  {
    this.nombre_events = num;
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
