import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PtBRStrings } from '../models/pt-br.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommomService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  getStrings(): Observable<PtBRStrings> {
    return this.http.get<PtBRStrings>('assets/pt-BR.json');
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
}
