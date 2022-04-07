import {User} from './user.model';

export class FeedbackModel {
  id: number;
  review: string;
  user: User;


  constructor(id: number, review: string, user: User) {

  this.id = id;
  this.review = review;
  this.user = user;


  }

}
