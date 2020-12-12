import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url = 'http://localhost:8080/api/image/';
  // tslint:disable-next-line:variable-name
  constructor(private _httpClient: HttpClient) { }

  // tslint:disable-next-line:typedef variable-name ban-types
  getImage(nom_Image: String)
  {
    return this._httpClient.get(this.url + 'get/' + nom_Image);
  }
  save_Image(uploadImageData: FormData )
  {
    this._httpClient.post('http://localhost:8080/api/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
          console.log(response);
        }
      );
  }
}
