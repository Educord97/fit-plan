import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  rate(newRating: number): void {
    const rating = newRating;
    const url = `${this.baseUrl}/classificacao/`;
    const data = { rating: newRating };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post(url, data, { headers }).subscribe(
      response => {
        console.log('Classificação salva com sucesso:', response);
      },
      error => {
        console.error('Erro ao salvar a classificação:', error);
      }
    );
  }

  readLastRate(): Observable<ITreino | null> {
    const url = `${this.baseUrl}/classificacao`;
    return this.http.get<ITreino[]>(url).pipe(
      map((classificacao) => {
        if (classificacao && classificacao.length > 0) {
          return classificacao[classificacao.length - 1];
        }
        return null;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!', true);
    return EMPTY;
  }
}
