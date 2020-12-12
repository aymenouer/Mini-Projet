import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message: string;
  imageName: any;

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }



  onUpload() {
console.log(this.selectedFile);
   const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8080/api/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image uploaded successfully';
          } else {
            this.message = 'Image not uploaded successfully';
          }
        }
      );


  }

    getImage() {

    this.httpClient.get('http://localhost:8080/api/image/get/' + this.imageName)
      .subscribe(
        res => {
          this.retrievedImage = 'data:image/jpeg;base64,' +  this.retrieveResonse.picByte;
        }
      );
  }
}
