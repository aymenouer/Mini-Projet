import {User} from './User';
import {Categorie} from './Categorie';
import {Comment} from './Comment';
import {Storie} from './Storie';
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
  comments: Comment[];
  stories: Storie[];
}
