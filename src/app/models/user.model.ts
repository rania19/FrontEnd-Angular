import {Farm} from '../farm/models/farm.model';


export class User{

  id: number;
  userName: string;
  email: string;
  addresse: string;
  mdp: string;
  rating: number;
  confirmAlert: boolean;
  confirmed: boolean;
  telephone: string;
  signalNumber: number;
  violenceNumb: number;
   harcelNumb: number;
   fausseInfNumb: number;
  spamNumb: number;
  status: string;
  banned: boolean;
  bannperiod: boolean;
  clientrole: string;
  farmexist: boolean;
  farms: Farm[];
  rateset: boolean;
  ville: string;
  hasinvest: boolean;
  role: string[];


  constructor() {




  }

}
