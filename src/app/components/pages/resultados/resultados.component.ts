import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIMC } from 'src/app/models/imc.interface';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';
import { ImcService } from 'src/app/services/imc.service';
import { ImcDialogComponent } from '../imc/imc-dialog/imc-dialog.component';
import { TreinosService } from 'src/app/services/treinos.service';
import { ITreino } from '../../models/treino.model';
import { IIntensidade, Intensidade } from '../../models/intensidade.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css'],
})
export class ResultadosComponent implements OnInit {
  constructor(
    private commomService: CommomService,
    private imcService: ImcService,
    public dialog: MatDialog,
    public treinoService: TreinosService
  ) {}

  strings?: PtBRStrings;
  imcResultado?: IIMC;
  intensidade?: ITreino[];
  objetivo?: ITreino[];

  rating: number = 0;
  ratings?: ITreino;

  @Input() imcFromParent?: string;
  @Input() intensidadeFromParent?: string;
  @Input() avaliacaoTreinoFromParent?: string;
  @Input() avaliacaoEstrelasFromParent?: string;
  @Input() objetivoFromParent?: string;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
    this.load();
    this.getreadLastImc();
    this.getLastRate();
  }

  getreadLastImc(): void {
    this.imcService.readLastImc().subscribe((imc) => {
      if (imc !== null) {
        this.imcResultado = imc;
      } else {
        this.commomService.showMessage('Nenhum IMC cadastrado!');
      }
    });
  }

  rate(newRating: number): void {
    this.treinoService.rate(newRating);
    this.rating = newRating;
  }

  getLastRate(): void {
    this.treinoService.readLastRate().subscribe((data) => {
      if (data !== null) {
        this.ratings = data;
        this.rating = data.rating as any;
      } else {
        this.rating = 0;
        this.commomService.showMessage('Nenhuma Classificação cadastrada!');
      }
    });
  }

  load(): void {
    this.treinoService.readLastIntensidadeByTreino().subscribe((treino) => {
      if (treino !== null) {
        this.intensidade = treino.intensidades;
        this.objetivo = treino.objetivos;
      } else {
        this.commomService.showMessage('Nenhum TREINO cadastrado!');
      }
    });
  }

  openDialog() {
    this.dialog.open(ImcDialogComponent);
  }
}
