import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/core/logs/services/logs.service';
import { map, pluck } from 'rxjs';
import { Log } from 'src/app/core/logs/models/log.model';

// TODO: Element Selection
@Component({
  selector: 'app-monitoring-page',
  templateUrl: './monitoring-page.component.html',
  styleUrls: ['./monitoring-page.component.scss']
})
export class MonitoringPageComponent implements OnInit {

  constructor(
    private logsService: LogsService
  ) { }
  public basicData: any = {};
  public barData: any;
  public pieData: any;
  public polarData: any;
  public radarData: any;

  ngOnInit(): void {
    // TODO: move to "set up graph"
    this.logsService.getAllLogs().pipe(
      pluck('data'),
      map((data) => {
        const sensorsMapped: any = {};
        data.forEach((report) => {
          const reportData = JSON.parse(report.data) as Log[];
          reportData.forEach(log => {
            if (!sensorsMapped[log.sensor_code]) {
              sensorsMapped[log.sensor_code] = {
                labels: [],
                datasets: [
                  {
                    label: log.sensor_code,
                    data: [],
                    fill: false,
                    borderColor: '#42A5F5',
                    tension: .4
                  }
                ],
              }
            }

            // TODO: Handle datetime orders
            sensorsMapped[log.sensor_code].datasets[0].data.push(log.value);
            sensorsMapped[log.sensor_code].labels.push(
              new Date(log.datetime).toLocaleTimeString()
            );
          });
        });
        return sensorsMapped;
      })
    ).subscribe(data => {
      // TODO Handle dynamic types of sensors
      this.basicData = data['4E4D3549-2E91-46F8-82D8-7E73D5C19252'];
    });


    this.basicData = {
      labels: ['10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06', '10:07'],
      datasets: [
        {
          label: 'Temperature vh1',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#42A5F5',
          tension: .4
        },
        {
          label: 'Temperature vh2',
          data: [28, 48, 40, 19, 86, 27, 90],
          fill: false,
          borderColor: '#FFA726',
          tension: .4
        }
      ]
    };

    this.barData = {
      labels: ['10:00', '10:01', '10:02', '10:03', '10:04', '10:05', '10:06'],
      datasets: [
        {
          label: 'Humidity VS2-J',
          backgroundColor: '#2f4860',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Humidity VS2-J',
          backgroundColor: '#00bb7e',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };

    this.pieData = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }
      ]
    };

    this.polarData = {
      datasets: [{
        data: [
          11,
          16,
          7,
          3,
          14
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB"
        ],
        label: 'My dataset'
      }],
      labels: [
        "Red",
        "Green",
        "Yellow",
        "Grey",
        "Blue"
      ]
    };

    this.radarData = {
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'Bares VF3',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: 'Bares VF4',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          pointBackgroundColor: 'rgba(255,99,132,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,99,132,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    };
  }

}
