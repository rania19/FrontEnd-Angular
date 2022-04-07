import {ProductElement} from './ProductElement';


export class InvestRequest{
  proposition: ProductElement[];

  amount: number;
  cardNumber: string;
  cvc: number;
  expMonth: number;
  expYear: number;

  constructor(proposition: ProductElement[], amount: number, cardNumber: string, cvc: number, expMonth: number, expYear: number ) {
    this.proposition = proposition;


    this.amount = amount;
    this.cardNumber = cardNumber ;
    this.cvc = cvc;
    this.expMonth = expMonth ;
    this.expYear = expYear ;


  }

}
