import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring-page',
  templateUrl: './monitoring-page.component.html',
  styleUrls: ['./monitoring-page.component.scss']
})
export class MonitoringPageComponent implements OnInit {

  constructor() { }
  public basicData: any = {};

  ngOnInit(): void {
    this.basicData = {
      labels: ['10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06'],
      datasets: [
        {
          label: 'Temperature',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
        {
          label: 'Second Dataset',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
        }
      ]
    };
  }

}
