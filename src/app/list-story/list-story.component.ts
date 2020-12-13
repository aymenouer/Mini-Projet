import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';
import {StorieService} from '../services/storie.service';
import {Event} from '../models/Event';
import {Storie} from '../models/Storie';
import {MatDialog} from '@angular/material/dialog';
import {StorieComponent} from '../storie/storie.component';

@Component({
  selector: 'app-list-story',
  templateUrl: './list-story.component.html',
  styleUrls: ['./list-story.component.css']
})
export class ListStoryComponent implements OnInit {
  content: string;
  event: Event;
  listStories: Storie[];
  constructor(private serviceEvent: EventService,private service: ActivatedRoute,private userService: UserService, private storieService: StorieService) { }


  ngOnInit(): void {
    this.serviceEvent.getEvent(this.service.snapshot.params.id).subscribe(
      (data: Event) => {
        this.event = data;
      },
      (err) => {

      },
      () => {
        this.storieService.getStories(this.event.id).subscribe(
          (data: Storie[] ) =>
          {
            this.listStories = data;



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
  update(storie) {
    this.storieService.getStories(this.event.id).subscribe(
      (data: Storie[]) => {
        this.listStories = data;


      }
    );
  }
}
