import { Component, OnInit } from '@angular/core';
import { LogsService } from 'src/app/core/logs/services/logs.service';
import { map, pluck } from 'rxjs';
import { Log } from 'src/app/core/logs/models/log.model';
import { ElementsService } from 'src/app/core/elements/elements.service';
import { Element } from 'src/app/core/elements/models/element.model';
import { Sensor } from 'src/app/core/sensors/models/sensor.model';
import { SensorsService } from 'src/app/core/sensors/sensors.service';

// TODO: Element Selection
@Component({
  selector: 'app-monitoring-page',
  templateUrl: './monitoring-page.component.html',
  styleUrls: ['./monitoring-page.component.scss']
})
export class MonitoringPageComponent implements OnInit {

  constructor(
    private logsService: LogsService,
    private elementsService: ElementsService,
    private sensorsService: SensorsService,
  ) { }

  public elements: Element[] = [];
  public filteredElements: Element[] = [];
  public selectedElement?: Element;
  public graphsData: any[] = [];
  public sensors: Sensor[] = [];

  ngOnInit(): void {
    this.elementsService.getElements().subscribe(response => {
      this.elements = response.data;
    });
    this.sensorsService.getSensors().subscribe(response => {
      this.sensors = response.data;
    });
    this.setUpGraphs();
  }

  public filterElements(event: any) {

    this.filteredElements = this.elements.filter(
      (el: Element) => el.name.toLocaleLowerCase().includes(event.query.toLocaleLowerCase())
    );
    console.log(this.filteredElements);
  }

  private setUpGraphs(): void {
    this.logsService.getAllLogs().pipe(
      pluck('data'),
      map((data) => {
        const sensorsMapped: any = {};
        data.forEach((report) => {
          const reportData = JSON.parse(report.data) as Log[];
          reportData.forEach(log => {
            const sensor = this.sensors.find(sen => log.sensor_code === sen.code);

            if (!sensorsMapped[log.sensor_code]) {
              sensorsMapped[log.sensor_code] = {
                labels: [],
                datasets: [
                  {
                    label: sensor ? sensor.name : log.sensor_code,
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
    ).subscribe((data: any[]) => {
      this.graphsData = Object.values(data);
    });
  }

}
