import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '../models/Event';
import {CategorieService} from '../services/categorie.service';
import {Categorie} from '../models/Categorie';
import {EventService} from '../services/event.service';
import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-form-add-event',
  templateUrl: './form-add-event.component.html',
  styleUrls: ['./form-add-event.component.css']
})
export class FormAddEventComponent implements OnInit {
  EventForm: FormGroup;
  selectedFile: File;
  @Output() notifacation = new EventEmitter<Event>();
  constructor(private serviceCatgorie: CategorieService, private imageService: ImageService , private Eventservice: EventService) { }

  ngOnInit(): void {
    this.EventForm = new FormGroup({
      titre: new FormControl('', [Validators.required]),
      date_Debut: new FormControl('',[Validators.required]),
      date_Fin: new FormControl('',[Validators.required]),
      nom_categorie: new FormControl('',[Validators.required]),
      nom_image: new FormControl('',[Validators.required]),
    });
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  onSubmit()
  {
    let event = new Event();
    event.titre=this.EventForm.get('titre').value;
    event.date_Debut=this.EventForm.get('date_Debut').value;
    event.date_Fin=this.EventForm.get('date_Fin').value;
event.nom_image=this.selectedFile.name;
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
this.imageService.save_Image(uploadImageData);
    let categorie = new Categorie();
    this.serviceCatgorie.getCategoriebyName(this.EventForm.get('nom_categorie').value).subscribe(
      (res: Categorie) => {

        categorie = res;

      },
      error => console.log(error),
      () => {
        event.categorie = categorie;
        this.Eventservice.addEvent(event).subscribe(
  () => {} ,
  () => {}  ,
  () => {    this.notifacation.emit(event); }
);
  }
);



      }



  }

