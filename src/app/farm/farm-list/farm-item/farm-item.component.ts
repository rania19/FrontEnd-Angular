import {Component, Input, OnInit} from '@angular/core';
import {Farm} from '../../models/farm.model';

@Component({
  selector: 'app-farm-item',
  templateUrl: './farm-item.component.html',
  styleUrls: ['./farm-item.component.css']
})
export class FarmItemComponent implements OnInit {
   @Input() farm: Farm;
  constructor() { }

  ngOnInit(): void {
  }

}
