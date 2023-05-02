import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { JsonApiResponse } from 'src/app/core/base/json-api-response.model';
import { SensorType } from 'src/app/core/sensor-types/models/sensor-type.model';



@Injectable({
  providedIn: 'root'
})
export class SensorTypesService {
  private endpoint = 'sensor-types';
  constructor(
    private http: HttpClient
  ) {

  }

  public getSensorTypes(): Observable<JsonApiResponse<SensorType[]>> {
    return this.http.get<JsonApiResponse<SensorType[]>>(
      environment.apiUrl + this.endpoint
    );
  }

}
