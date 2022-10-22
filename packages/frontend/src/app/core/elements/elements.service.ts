import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPaginatedResource } from '../base/json-resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Element } from 'src/app/core/elements/models/element.model';

@Injectable({
  providedIn: 'root'
})
export class ElementsService {
  private endpoint = 'elements';
  constructor(
    private http: HttpClient
  ) {

  }

  public getElements(): Observable<JsonPaginatedResource<Element>> {
    return this.http.get<JsonPaginatedResource<Element>>(
      environment.apiUrl + this.endpoint
    );
  }

}
