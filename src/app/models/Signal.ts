import {FeedbackModel} from './Feedback.model';
import {User} from './user.model';


export class Signal{
  reportReason: string;
  feedback: FeedbackModel;
  user: User;


  constructor(reportReason: string) {

    this.reportReason = reportReason;



  }
}

