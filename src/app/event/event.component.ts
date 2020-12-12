import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageService} from '../services/image.service';
import {Event} from '../models/Event';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DetailEventComponent} from '../detail-event/detail-event.component';
import {EventService} from '../services/event.service';
import {TokenStorageService} from '../services/token-storage.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  retrievedImage: any;
  retrieveResonse: any;
  currentUser: any;

  role: string;
  @Output() notifacation = new EventEmitter<Event>();
  @Input() event: Event;
  @Input() name_event: string;
  constructor(  private imageService: ImageService, private dialog: MatDialog, private token: TokenStorageService) { }
  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
Event: this.event,

    };
const dialogRef =     this.dialog.open(DetailEventComponent , dialogConfig );

    dialogRef.afterClosed().subscribe(result => {

      if (result == true)
      {
        this.notifacation.emit(this.event);

      }


    });
  }
  ngOnInit(): void {

    this.currentUser = this.token.getUser();
    this.role = this.currentUser.roles[0];

    this.imageService.getImage(this.event.nom_image)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        }
      );
 }

}
