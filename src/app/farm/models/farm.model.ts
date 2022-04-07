import {User} from '../../models/user.model';

export class Farm {
  public id: number;
  public nomF: string;
  public region: string;
  public descriptionF: string;
  public imageF: string;
  public user: User;
  public ville: string;
  public investon: boolean;


  constructor(id: number, nomF: string, descriptionF: string, imageF: string, region: string) {
    this.nomF = nomF;
    this.descriptionF = descriptionF;
    this.imageF = imageF;
    this.region = region;
    this.id = id ;


  }


}
