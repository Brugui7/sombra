import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/core/sensors/models/sensor.model';
import { Element } from 'src/app/core/elements/models/element.model';
import { ElementsService } from 'src/app/core/elements/elements.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SensorsService } from 'src/app/core/sensors/sensors.service';
import { catchError, EMPTY, take } from 'rxjs';

@Component({
  selector: 'app-sensors-dialog',
  templateUrl: './sensors-dialog.component.html',
  styleUrls: [ './sensors-dialog.component.scss' ],
})
export class SensorsDialogComponent implements OnInit {

  @Input() element?: Element;

  public cols = [
    {field: 'id', header: 'Id'},
    {field: 'name', header: 'Name'},
    {field: 'code', header: 'Code'},
    {field: 'description', header: 'Description'},
    {field: 'measure_unit', header: 'Measure Unit'},
  ];

  public sensors: Sensor[] = [];
  public loading = true;
  public sensor?: Sensor;
  public deleteSensorDialog = false;
  public editSensorDialog = false;
  public sensorForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    code: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    measure_unit: new FormControl(null, [Validators.required]),
  })

  constructor(
    private elementsService: ElementsService,
    private sensorsService: SensorsService
  ) { }

  ngOnInit(): void {
    this.loadSensors()
  }

  private loadSensors(): void {
    if (!this.element) {
      return;
    }
    this.elementsService.getSensorsByElement(this.element).subscribe(
      response => {
        this.sensors = response.data;
        this.loading = false;
      }
    );
  }

  deleteSensor(sensor: Sensor) {
    this.deleteSensorDialog = true;
    this.sensor = {...sensor};
  }

  confirmDelete() {
    if (!this.sensor) {
      return;
    }
    this.loading = true;
    this.deleteSensorDialog = false;
    this.sensorsService.deleteSensor(this.sensor).pipe(
      take(1),
      catchError((err) => {
        this.loading = false
        return EMPTY;
      })
    ).subscribe(res => {
      this.loadSensors();
    });
    this.sensor = undefined;
    /*this.messageService.add({
      severity: 'success',
      summary: 'Successful',
      detail: 'Sensor Deleted',
      life: 3000,
    });*/

  }

  openNew() {
    this.editSensorDialog = true;
  }

  closeNew() {
    this.editSensorDialog = false;
  }

  createSensor() {
    if (!this.element) {
      return;
    }
    this.loading = true;
    this.sensorsService.createSensor(this.element, this.sensorForm.value)
    .pipe(
      take(1),
      catchError((err) => {
        this.loading = false
        return EMPTY;
      })
    )
    .subscribe(res => {
      this.loadSensors();
      this.editSensorDialog = false;
    });
  }

}
