import {Component, Input, OnInit} from '@angular/core';
import {Storie} from '../models/Storie';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { DetailStorieComponent } from '../detail-storie/detail-storie.component';
import {ImageService} from '../services/image.service';
@Component({
  selector: 'app-storie',
  templateUrl: './storie.component.html',
  styleUrls: ['./storie.component.css']
})
export class StorieComponent implements OnInit {
@Input() storie: Storie;
  retrievedImage: any;
  retrieveResonse: any;
  constructor(private imageService: ImageService,public dialog: MatDialog) { }


  openDialog(storie: Storie){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      storie: this.storie,

    };
    this.dialog.open(DetailStorieComponent,dialogConfig);
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
