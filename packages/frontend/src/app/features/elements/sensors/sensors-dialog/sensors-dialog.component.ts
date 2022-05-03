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
    {id: 1, name: 'Velocidad de inyeccion', code: 'VH1', description: 'Velocidad de inyección', measure_unit: 'm/s'},
    {id: 2, name: 'Tiempo de inyeccion', code: 'TH1', description: '', measure_unit: 's'},
    {id: 3, name: 'Velocidad del husillo', code: 'VH2', description: '', measure_unit: 'm/s'},
    {id: 4, name: 'Temperatura del material', code: 'TM1', description: 'Temperatura del material', measure_unit: 'celsius'},
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
