import {ProductElement} from './ProductElement';

export class ChangeDataRequest{


  amount: number;
  cardNumber: string;
  cvc: number;
  expMonth: number;
  expYear: number;

  constructor(cardNumber: string, cvc: number, expMonth: number, expYear: number) {

    this.cardNumber = cardNumber ;
    this.cvc = cvc;
    this.expMonth = expMonth ;
    this.expYear = expYear ;


  }
}
