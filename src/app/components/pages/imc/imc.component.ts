import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { PtBRStrings } from 'src/app/models/pt-br.interface';

import { CommomService } from 'src/app/services/commom-services.service';
import { ImcService } from 'src/app/services/imc.service';
import { ImcDialogComponent } from './imc-dialog/imc-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  @Output() resultadoIMCChange = new EventEmitter<number | string>();

  constructor(
    private commomService: CommomService,
    private imcService: ImcService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  strings?: PtBRStrings;
  peso?: number;
  altura?: number;
  resultadoIMC?: number;
  abaixoDoPeso: boolean = false;
  pesoIdeal: boolean = false;
  levementeAcima: boolean = false;
  obesidade1: boolean = false;
  obesidade2: boolean = false;
  obesidade3: boolean = false;
  resultadoExibido: boolean = false;

  ngOnInit() {
    this.loadStrings();
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

  obterClassificacaoIMC(): string {
    if (this.peso && this.altura) {
      this.resultadoIMC = this.peso / (this.altura / 100) ** 2;
      this.resultadoIMC = Number(this.resultadoIMC.toFixed(1));
      this.resultadoExibido = true;
    } else {
      this.resultadoIMC = 0;
      this.resultadoExibido = false;
    }

    this.clearTableResults();

    if (this.resultadoIMC < 18.5 && this.resultadoExibido === true) {
      this.abaixoDoPeso = true;
      return 'abaixoDoPeso';
    } else if (this.resultadoIMC < 25 && this.resultadoExibido === true) {
      this.pesoIdeal = true;
      return 'pesoIdeal';
    } else if (this.resultadoIMC < 30 && this.resultadoExibido === true) {
      this.levementeAcima = true;
      return 'levementeAcima';
    } else if (this.resultadoIMC < 35 && this.resultadoExibido === true) {
      this.obesidade1 = true;
      return 'obesidade1';
    } else if (this.resultadoIMC < 40 && this.resultadoExibido === true) {
      this.obesidade2 = true;
      return 'obesidade2';
    } else if (this.resultadoExibido === true) {
      this.obesidade3 = true;
      return 'obesidade3';
    } else {
      return '';
    }
  }

  clearTableResults(): void {
    this.abaixoDoPeso = false;
    this.pesoIdeal = false;
    this.levementeAcima = false;
    this.obesidade1 = false;
    this.obesidade2 = false;
    this.obesidade3 = false;
  }

  clearFields(): void {
    this.peso = undefined;
    this.altura = undefined;
    this.resultadoIMC = undefined;
    this.abaixoDoPeso = false;
    this.pesoIdeal = false;
    this.levementeAcima = false;
    this.obesidade1 = false;
    this.obesidade2 = false;
    this.obesidade3 = false;
  }

  salvarResultado() {
    if (this.peso && this.peso > 0 && this.altura && this.altura > 0) {
      const imcData = {
        peso: this.peso,
        altura: this.altura,
        imc: this.resultadoIMC,
      };

      this.imcService.saveIMC(imcData).subscribe(
        (response) => {
          this.commomService.showMessage('IMC adicionado!');
          console.log('Dados de IMC salvos com sucesso:', response);
          this.clearFields();
        },
        (error) => {
          this.commomService.showMessage('IMC não adicionado!');
          console.error('Erro ao salvar dados de IMC:', error);
        }
      );
    } else {
      this.commomService.showMessage(
        'Peso e altura devem ser maiores que zero para salvar.'
      );
    }
    this.resultadoIMCChange.emit(this.resultadoIMC);
    this.router.navigate(['/imc']);
  }

  openDialog() {
    this.dialog.open(ImcDialogComponent);
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
