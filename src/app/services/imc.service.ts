import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IIMC } from '../models/imc.interface';

type EntityResponseType = HttpResponse<IIMC>;

@Injectable({
  providedIn: 'root',
})
export class ImcService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getIMC(): Observable<HttpResponse<IIMC[]>> {
    return this.http
      .get<IIMC[]>(`${this.baseUrl}/imcResultados`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  read(): Observable<IIMC[]> {
    return this.http.get<IIMC[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  saveIMC(imc: IIMC): Observable<EntityResponseType> {
    return this.http.post<IIMC>(`${this.baseUrl}/imcResultados`, imc, {
      observe: 'response',
    });
  }

  readById(id: number): Observable<IIMC> {
    const url = `${this.baseUrl}/imcResultados/${id}`;
    return this.http.get<IIMC>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readLastImc(): Observable<IIMC | null> {
    const url = `${this.baseUrl}/imcResultados`;
    return this.http.get<IIMC[]>(url).pipe(
      map((imcs) => {
        if (imcs && imcs.length > 0) {
          return imcs[imcs.length - 1];
        }
        return null;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<IIMC> {
    const url = `${this.baseUrl}/imcResultados/${id}`;
    return this.http.delete<IIMC>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!', true);
    return EMPTY;
  }
}
