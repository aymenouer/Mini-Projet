import {Component, Inject, OnInit} from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../models/Event';
import {ImageService} from '../services/image.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TokenStorageService} from '../services/token-storage.service';
@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {

  event: Event;
  retrievedImage: any;
  retrieveResonse: any;
  role: string;
  currentUser: any;
  etat_participer: boolean;

  constructor(private Eventservice: EventService, private token: TokenStorageService, private imageService: ImageService,private dialogRef: MatDialogRef<DetailEventComponent> , @Inject(MAT_DIALOG_DATA)  public data) {
    this.event = data.Event;

  }

  deleteEvent()
  {
    this.Eventservice.deleteEvent(this.event.id).subscribe(
      res => console.log(res),
    );

  }

  valideEvent()
  {
    this.Eventservice.valideEvent(this.event.id).subscribe(
      res => console.log(res),
    );

  }
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.role = this.currentUser.roles[0];
    this.Eventservice.verifier_participation(this.currentUser.id,this.event.id).subscribe(
      (res: boolean) => this.etat_participer = res
    );
 this.imageService.getImage(this.event.nom_image)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        }
      );
  }

  participer ()
  {
    this.etat_participer=true;
    this.Eventservice.participerEvent(this.currentUser.id, this.event.id);
  }
  remove_participation()
  {
    this.etat_participer=false;
    this.Eventservice.delete_participation(this.currentUser.id, this.event.id);
  }

}
