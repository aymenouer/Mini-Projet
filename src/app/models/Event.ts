import {User} from './User';
import {Categorie} from './Categorie';

export class Event
{
  id: string;
  titre: string;
  nom_image: string;
  isValide: boolean;
  date_Debut: Date;
  date_Fin: Date;
  users: User[];
  categorie: Categorie;
}
