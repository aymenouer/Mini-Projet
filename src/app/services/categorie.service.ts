import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  url = 'http://localhost:8080/api/Categorie/';
  constructor(private _httpClient: HttpClient) { }

  getCategoriebyName( name: string )
  {
    return this._httpClient.get(this.url + 'name/' + name );
  }
}
