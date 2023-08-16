import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIMC } from 'src/app/models/imc.interface';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';
import { ImcService } from 'src/app/services/imc.service';
import { ImcDialogComponent } from '../imc/imc-dialog/imc-dialog.component';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  constructor(
    private commomService: CommomService,
    private imcService: ImcService,
    public dialog: MatDialog
  ) {}

  strings?: PtBRStrings;
  imcResultado?: IIMC;

  @Input() imcFromParent?: string;
  @Input() intensidadeFromParent?: string;
  @Input() avaliacaoTreinoFromParent?: string;
  @Input() avaliacaoEstrelasFromParent?: string;
  @Input() objetivoFromParent?: string;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });

    this.imcService.readLastImc().subscribe((imc) => {
      if (imc !== null) {
        this.imcResultado = imc;
      } else {
        this.commomService.showMessage('Nenhum IMC cadastrado!');
      }
    });
  }

  openDialog() {
    this.dialog.open(ImcDialogComponent);
  }
}