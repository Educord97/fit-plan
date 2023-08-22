import { Component } from '@angular/core';
import { ITreino } from 'src/app/components/models/treino.model';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-treinos-dialog',
  templateUrl: './treinos-dialog.component.html',
  styleUrls: ['./treinos-dialog.component.css'],
})
export class TreinosDialogComponent {
  constructor(private treinoService: TreinosService) {}

  treinos: ITreino[] = [];

  displayedColumns = [
    'id',
    'nome',
    'objetivo',
    'intensidade',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
    'action',
  ];

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.treinoService.getTreinosCriados().subscribe((treinos) => {
      this.treinos = treinos.body || [];
      console.log(this.treinos);
    });
  }
}
