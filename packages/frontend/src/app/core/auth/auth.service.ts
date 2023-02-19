import { Injectable } from '@angular/core';
import { JsonApiResponse } from 'src/app/core/base/json-api-response.model';
import { catchError, map, Observable, of, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private endpoint = `${environment.apiUrl}auth`;

  constructor(
    private http: HttpClient,
  ) { }

  public login(email: string, password: string): Observable<boolean> {
    const data = {email, password};
    return this.http.post<JsonApiResponse<string>>(this.endpoint + '/login', data).pipe(
      take(1),
      map((response) => {
        localStorage.setItem('token', response.data);
        return true;
      }),
      catchError((error) => {
        return of(false);
      })
    );
  }
}
