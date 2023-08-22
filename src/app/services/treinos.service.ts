import { Injectable } from '@angular/core';

import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IObjetivo } from '../components/models/objetivo.model';
import { ITreino, Treino } from '../components/models/treino.model';
import { IIntensidade } from '../components/models/intensidade.model';

type EntityResponseType = HttpResponse<ITreino>;

@Injectable({
  providedIn: 'root',
})
export class TreinosService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getObjetivos(): Observable<HttpResponse<IObjetivo[]>> {
    return this.http
      .get<IObjetivo[]>(`${this.baseUrl}/objetivos`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getIntensidades(): Observable<HttpResponse<IIntensidade[]>> {
    return this.http
      .get<IIntensidade[]>(`${this.baseUrl}/intensidades`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getTreinos(): Observable<HttpResponse<Treino[]>> {
    return this.http
      .get<Treino[]>(`${this.baseUrl}/treinos`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  getTreinosCriados(): Observable<HttpResponse<Treino[]>> {
    return this.http
      .get<Treino[]>(`${this.baseUrl}/treinos-criados`, { observe: 'response' })
      .pipe(catchError((error) => this.errorHandler(error)));
  }

  createTreino(treino: ITreino): Observable<EntityResponseType> {
    return this.http.post<ITreino>(`${this.baseUrl}/treinos-criados`, treino, {
      observe: 'response',
    });
  }

  readById(id: number): Observable<ITreino> {
    const url = `${this.baseUrl}/treinos-criados/${id}`;
    return this.http.get<ITreino>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(treino: ITreino): Observable<ITreino> {
    const url = `${this.baseUrl}/treinos-criados/${treino.id}`;
    return this.http.put<ITreino>(url, treino).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  readLastIntensidadeByTreino(): Observable<ITreino | null> {
    const url = `${this.baseUrl}/treinos-criados`;
    return this.http.get<ITreino[]>(url).pipe(
      map((intensidade) => {
        if (intensidade && intensidade.length > 0) {
          return intensidade[intensidade.length - 1];
        }
        return null;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<ITreino> {
    const url = `${this.baseUrl}/treinos-criados/${id}`;
    return this.http.delete<ITreino>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!', true);
    return EMPTY;
  }
}
