import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Storie} from '../models/Storie';

import {ImageService} from '../services/image.service';

@Component({
  selector: 'app-detail-storie',
  templateUrl: './detail-storie.component.html',
  styleUrls: ['./detail-storie.component.css']
})
export class DetailStorieComponent implements OnInit {

  storie: Storie;
  retrievedImage: any;
  retrieveResonse: any;
  constructor(private imageService: ImageService,private dialogRef: MatDialogRef<DetailStorieComponent> , @Inject(MAT_DIALOG_DATA)  public data)
  {
    this.storie = data.storie;
  }

  ngOnInit(): void {
    this.imageService.getImage(this.storie.nom_image)
      .subscribe(
        res => {
          this.retrieveResonse = res;

          this.retrievedImage = 'data:image/jpeg;base64,' + this.retrieveResonse.picByte;
        }
      );
  }

}
