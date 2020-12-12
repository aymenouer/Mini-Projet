import { Pipe, PipeTransform } from '@angular/core';
import {Event} from '../models/Event';

@Pipe({
  name: 'eventCategory'
})
export class EventCategoryPipe implements PipeTransform {



  transform(Events: Event[], type: string, transform: boolean): unknown {

    console.log(Events);

    return this.filtreTexte(Events, type, transform);
  }



   filtreTexte(arr, requete, transform) {
    return arr.filter(function (el) {
      // tslint:disable-next-line:triple-equals
      if (transform == true)
      return el.categorie.type.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
      else
        return true;
    });
  }
}
