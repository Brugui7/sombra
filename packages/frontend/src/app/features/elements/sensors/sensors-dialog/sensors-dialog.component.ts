import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/core/elements/models/sensor.model';

@Component({
  selector: 'app-sensors-dialog',
  templateUrl: './sensors-dialog.component.html',
  styleUrls: ['./sensors-dialog.component.scss']
})
export class SensorsDialogComponent implements OnInit {

  public cols = [
    {field: 'id', header: 'Id'},
    {field: 'name', header: 'Name'},
    {field: 'code', header: 'Code'},
    {field: 'description', header: 'Description'},
    {field: 'measure_unit', header: 'Measure Unit'}
  ];

  public sensors: Sensor[] = [
    {id: 1, name: 'Patata', code: 'pat', description: 'Un sensor', measure_unit: 'cm2'},
    {id: 2, name: 'asdasd', code: 'paat', description: 'Un sensor', measure_unit: 'cm2'},
    {id: 3, name: 'Paasdastata', code: 'paaaat', description: 'Un sensor', measure_unit: 'cm2'},
    {id: 4, name: 'Pataasdasdta', code: 'paaaat', description: 'Un sensor', measure_unit: 'cm2'},
  ];
  public sensor?: Sensor;
  public deleteSensorDialog = false;

  constructor() { }

  ngOnInit(): void {
  }


  deleteSensor(sensor: Sensor) {
    this.deleteSensorDialog = true;
    this.sensor = {...sensor};
  }


  confirmDelete() {
    if (!this.sensors || this.sensor) {
      return;
    }
    this.deleteSensorDialog = false;
    this.sensors = this.sensors!.filter(val => val.id !== this.sensor!.id);
    /*this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Sensor Deleted',
      life: 3000,
    });*/
    this.sensor = undefined;
  }

}
