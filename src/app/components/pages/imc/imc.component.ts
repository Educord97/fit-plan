import { Component, OnInit } from '@angular/core';

import { CommomService } from 'src/app/services/commom-services.service';
@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css'],
})
export class ImcComponent implements OnInit {
  constructor(private commomService: CommomService) {}

  strings: any;
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

    this.abaixoDoPeso = false;
    this.pesoIdeal = false;
    this.levementeAcima = false;
    this.obesidade1 = false;
    this.obesidade2 = false;
    this.obesidade3 = false;

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
}
