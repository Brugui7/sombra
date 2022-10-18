import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JsonPaginatedResource } from 'src/app/core/base/json-resource.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Log, LogResponse } from 'src/app/core/logs/models/log.model';

@Injectable({
  providedIn: 'root'
})
export class LogsService {
  private endpoint = 'logs';

  constructor(
    private http: HttpClient
  ) {

  }

  //  Just for testing purposes
  public getAllLogs(): Observable<JsonPaginatedResource<LogResponse>> {
    return this.http.get<JsonPaginatedResource<LogResponse>>(
      environment.apiUrl + this.endpoint
    );
  }

}
