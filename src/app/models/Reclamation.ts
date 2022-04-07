import {User} from './user.model';


export class Reclamation{
  id: number;
  object: string;
  content: number;
  user: User;
  date: Date;


  constructor(object: string,  content: number) {

 this.content = content;
 this.object = object;
  }
}
