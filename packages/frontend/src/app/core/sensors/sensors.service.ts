import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPaginatedResource } from '../base/json-resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Sensor } from 'src/app/core/sensors/models/sensor.model';
import { Element } from 'src/app/core/elements/models/element.model';
import { JsonApiResponse } from 'src/app/core/base/json-api-response.model';


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

  public createSensor(element: Element, sensor: Sensor): Observable<JsonApiResponse<Sensor>> {
    const data = {
      ...sensor,
      element_id: element.id
    };
    return this.http.post<JsonApiResponse<Sensor>>(
      environment.apiUrl + this.endpoint,
      data
    );
  }

  deleteSensor(sensor: Sensor): Observable<JsonApiResponse<null>> {
    return this.http.delete<JsonApiResponse<null>>(
      `${environment.apiUrl}${this.endpoint}/${sensor.id}`
    );
  }

}
