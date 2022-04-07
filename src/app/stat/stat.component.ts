import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {AdminService} from '../services/Admin.service';
import {VillStat} from '../models/VillStat';
import {Data} from '../models/Data';
import {JsonObject} from '@angular/compiler-cli/ngcc/src/packages/entry_point';


@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.css']
})
export class StatComponent implements OnInit {
  Regions: VillStat[];
  chartOptions: {};
  Highcharts = Highcharts;
  pieData: any = [];
  test: any;
  datalist: Data[];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {



    this.getPiedata();
    // this.preparePiechart(JSON.stringify(this.pieData));


  }

  getPiedata() {
    this.adminService.GetRegionPourcentages().subscribe(
      data => {
        this.Regions = data;
        console.log("regions" + this.Regions);

        for (var i = 0; i < this.Regions.length; i++) {
          console.log("villename"+this.Regions[i].ville);
          console.log("perr"+this.Regions[i].pourcentage);

          this.pieData.push({
            name: this.Regions[i].ville,
            y: this.Regions[i].pourcentage,
          })
        }
        console.log("pie", this.pieData);
        console.log("data ti send"+JSON.stringify(this.pieData));
        this.preparePiechart(JSON.stringify(this.pieData));  // <-- create chart options here
      }
    );

  }

  preparePiechart(pieData: any) {

    if ((JSON.stringify(this.pieData).length) > 0 ){

    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'La répartition des fermes sur Firmetna'

      },

      series: [{
        name: 'pourcentage %',
        colorByPoint: true,
        data: this.pieData,
      }]





    }
  }

  }
}
