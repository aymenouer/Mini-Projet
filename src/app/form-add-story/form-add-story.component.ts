import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Event} from '../models/Event';
import {Categorie} from '../models/Categorie';
import {Storie} from '../models/Storie';
import {TokenStorageService} from '../services/token-storage.service';
import {StorieService} from '../services/storie.service';
import {ImageService} from '../services/image.service';
import {User} from '../models/User';

@Component({
  selector: 'app-form-add-story',
  templateUrl: './form-add-story.component.html',
  styleUrls: ['./form-add-story.component.css']
})
export class FormAddStoryComponent implements OnInit {
  StoryForm: FormGroup;
  selectedFile: File;
  currentuser: any;
  @Output() notif = new EventEmitter<Storie>();
  @Input() id_event :string;

  constructor(private token: TokenStorageService, private serivestory: StorieService, private  imageService: ImageService) {
  }

  ngOnInit(): void {
    this.currentuser=this.token.getUser();
    this.StoryForm = new FormGroup({

        nom_image: new FormControl('', [Validators.required]),
      }
    );
  }

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    let storie = new Storie();
    storie.nom_image = this.selectedFile.name;
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.imageService.save_Image(uploadImageData);
    let user = new User();
    user.id = this.currentuser.id;
    storie.users = user;

    this.serivestory.addStorie(storie, this.id_event).subscribe(
      (res) => {
console.log(res);

      },
      error => console.log(error),
      () => {
        this.notif.emit(storie);
      }
    );

  }
}
