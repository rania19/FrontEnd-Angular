import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {TokenStorageService} from '../services/token-storage.service';
import {FeedbackService} from '../services/Feedback.service';
import {FeedbackModel} from '../models/Feedback.model';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {

    @Input() idFarm: number;
      feedbacks: FeedbackModel[];

    idUser:number;

  constructor(private tokenStorage: TokenStorageService, private feedbackService: FeedbackService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("farm iss"+ this.idFarm);
    this.idUser = this.tokenStorage.getUser().id;
    this.feedbackService.GetFeedback(this.idFarm).subscribe(
      data => {
        this.feedbacks = data;
        this.refresh();
        console.log("Data  is  " +data);

      },
    error => console.log(error));



  }


  refresh() {
    this.cd.detectChanges();
  }

}
