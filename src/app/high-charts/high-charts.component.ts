import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-high-charts',
  templateUrl: './high-charts.component.html',
  styleUrls: ['./high-charts.component.css']
})
export class HighChartsComponent implements OnInit {

  options: any;

  constructor() {
    this.options = {
      title: { text: 'simple chart' },
      series: [{
        data: [29.9, 71.5, 106.4, 129.2],
      }]
    };
  }

  ngOnInit() {
  }

}
