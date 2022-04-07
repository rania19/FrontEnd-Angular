import {Component, Input, OnInit} from '@angular/core';
import {Reclamation} from '../../models/Reclamation';

@Component({
  selector: 'app-reclamation-item',
  templateUrl: './reclamation-item.component.html',
  styleUrls: ['./reclamation-item.component.css']
})
export class ReclamationItemComponent implements OnInit {
    @Input()
    Rec: Reclamation;
  constructor() { }

  ngOnInit(): void {
  }

}
