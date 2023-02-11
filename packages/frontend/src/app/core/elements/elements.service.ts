import { Injectable } from '@angular/core';
import { elementAt, Observable } from 'rxjs';
import { JsonPaginatedResource } from '../base/json-resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Element } from 'src/app/core/elements/models/element.model';
import { JsonApiResponse } from 'src/app/core/base/json-api-response.model';
import { Sensor } from 'src/app/core/sensors/models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  private endpoint = `${environment.apiUrl}elements`;
  constructor(
    private http: HttpClient
  ) {

  }

  public getElements(): Observable<JsonPaginatedResource<Element>> {
    return this.http.get<JsonPaginatedResource<Element>>(
      this.endpoint
    );
  }

  public create(element: Element): Observable<JsonApiResponse<Element>> {
    return this.http.post<JsonApiResponse<Element>>(
      this.endpoint,
      element
    );
  }

  public update(element: Element): Observable<JsonApiResponse<Element>> {
    return this.http.put<JsonApiResponse<Element>>(
      `${this.endpoint}/${element.id}`,
      element
    );
  }

  public getSensorsByElement(element: Element): Observable<JsonApiResponse<Sensor[]>> {
    return this.http.get<JsonApiResponse<Sensor[]>>(
      `${this.endpoint}/${element.id}/sensors`
    );
  }

}
