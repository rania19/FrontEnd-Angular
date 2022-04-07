
import {ProductElement} from './ProductElement';
import {Farm} from './Farm';
import {User} from './user.model';
import {Livraison} from './Livraison';

export class Investissement{


  id: number;
  investedInFarm: Farm;
  total: number;
  retarded: number;
  regled: boolean;
  listproductelements: ProductElement[];
  confirmed: boolean;
  invAction: string;
  invStatus: string;

  user: User;



  constructor(investedInFarm: Farm, listproductelements: ProductElement[], invAction: string) {
    this.invAction = invAction;
    this.investedInFarm = investedInFarm;

    this.listproductelements = listproductelements;



  }




}
