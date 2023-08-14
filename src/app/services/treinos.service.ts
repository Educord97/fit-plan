import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Objetivo } from '../components/models/objetivo.model';
import { ITreino, Treino } from '../components/models/treino.model';

type EntityResponseType = HttpResponse<ITreino>;

@Injectable({
  providedIn: 'root',
})
export class TreinosService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getObjetivos(): Observable<HttpResponse<Objetivo[]>> {
    return this.http
      .get<Objetivo[]>(`${this.baseUrl}/objetivos`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getTreinos(): Observable<HttpResponse<Treino[]>> {
    return this.http
      .get<Treino[]>(`${this.baseUrl}/treinos`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  createTreino(treino: ITreino): Observable<EntityResponseType> {
    return this.http.post<ITreino>(`${this.baseUrl}/treinos`, treino, {
      observe: 'response',
    });
  }
  findById(id: number): Observable<EntityResponseType> {
    return this.http.get<ITreino>(`${this.baseUrl}/${id}`, {
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
