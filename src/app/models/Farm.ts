import {Investissement} from './Investissement';
import {User} from './user.model';

export class Farm{

  public id: number;
  public nomF: string;
  public region: string;
  public descriptionF: string;
  public imageF: string;
  public user: User;
  public ville: string;
  public investon: boolean;



  constructor( nomF: string, descriptionF: string, region: string) {
    this.nomF = nomF;
    this.descriptionF = descriptionF;


    this.region = region;



  }
}
