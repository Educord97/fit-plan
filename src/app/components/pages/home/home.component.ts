import { Component, OnInit, Input } from '@angular/core';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';
import { ITreino } from '../../models/treino.model';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  strings?: PtBRStrings;

  imcToParent?: string;
  intensidadeToParent?: string;
  avaliacaoTreinoToParent?: string;
  objetivoToParent?: string;
  avaliacaoEstrelasToParent?: string;

  treinos: ITreino[] = [];

  constructor(
    private commomService: CommomService,
    private treinoService: TreinosService
  ) {}

  displayedColumns = [
    'nome',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'action',
  ];

  ngOnInit() {
    this.loadStrings();
    this.loadTreinos();
  }

  loadTreinos(): void {
    this.treinoService.getTreinosCriados().subscribe((treinos) => {
      this.treinos = treinos.body || [];
      console.log("TREINOS: ",this.treinos);
    });
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data: PtBRStrings) => {
      this.strings = data;
      this.imcToParent = data.HomeResultados?.imc;
      this.intensidadeToParent = data.HomeResultados?.intensidadeLabel;
      this.objetivoToParent = data.HomeResultados?.objetivoLabel;
      this.avaliacaoEstrelasToParent = data.HomeResultados?.avaliacaoLabel;
    });
  }
}
