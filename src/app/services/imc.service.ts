import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IIMC } from '../models/imc.interface';

type EntityResponseType = HttpResponse<IIMC>;

@Injectable({
  providedIn: 'root',
})
export class ImcService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getIMC(): Observable<HttpResponse<IIMC>> {
    return this.http
      .get<IIMC>(`${this.baseUrl}/imc`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  saveIMC(imc: IIMC): Observable<EntityResponseType> {
    return this.http.post<IIMC>(`${this.baseUrl}/imcResultados`, imc, {
      observe: 'response',
    });
  }

  findById(id: number): Observable<EntityResponseType> {
    return this.http.get<IIMC>(`${this.baseUrl}/${id}`, {
      observe: 'response',
    });
  }

  delete(id: number): Observable<HttpResponse<{}>> {
    return this.http.delete(`${this.baseUrl}/${id}`, { observe: 'response' });
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!', true);
    return EMPTY;
  }
}
