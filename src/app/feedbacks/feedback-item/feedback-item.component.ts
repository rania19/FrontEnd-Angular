import {Component, Input, OnInit} from '@angular/core';
import {FeedbackModel} from '../../models/Feedback.model';
import {TokenStorageService} from '../../services/token-storage.service';
import {FeedbackService} from '../../services/Feedback.service';

@Component({
  selector: 'app-feedback-item',
  templateUrl: './feedback-item.component.html',
  styleUrls: ['./feedback-item.component.css']
})
export class FeedbackItemComponent implements OnInit {

  @Input()
  feedback: FeedbackModel;
  @Input()
  feedbacklist: FeedbackModel[];

  idUser: number;
  commentOfuser: boolean;


  constructor(private tokenStorage: TokenStorageService, private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.idUser = this.tokenStorage.getUser().id;


  }


  reloadData(){


  }

  deleteFeed(idfeed: number) {
    this.feedbackService.DeleteFeed(idfeed).subscribe(
      data => {
        console.log(data);
        this.reloadData();
        // }
      }
    );
  }
}


