import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPaginatedResource } from '../base/json-resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Sensor } from 'src/app/core/sensors/models/sensor.model';


@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  private endpoint = 'sensors';
  constructor(
    private http: HttpClient
  ) {

  }

  public getSensors(): Observable<JsonPaginatedResource<Sensor>> {
    return this.http.get<JsonPaginatedResource<Sensor>>(
      environment.apiUrl + this.endpoint
    );
  }

}
