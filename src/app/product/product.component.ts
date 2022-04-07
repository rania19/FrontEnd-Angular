import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() id: number;

  @Input() idFarm: number;
  constructor(private cd: ChangeDetectorRef) { }

  refresh() {
    this.cd.detectChanges();
  }

  ngOnInit(): void {
    this.refresh();
    console.log("id est "+this.id);
  }

}
