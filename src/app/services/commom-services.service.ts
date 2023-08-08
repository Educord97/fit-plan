import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient) { }

  getStrings(): Observable<any> {
    return this.http.get('assets/pt-BR.json');
  }
}
