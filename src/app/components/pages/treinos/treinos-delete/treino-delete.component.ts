import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITreino } from 'src/app/components/models/treino.model';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-treinos-delete-dialog',
  templateUrl: './treino-delete.component.html',
  styleUrls: ['./treino-delete.component.css'],
})
export class TreinosDeleteComponent {
  treino?: ITreino;
  strings?: PtBRStrings;

  constructor(
    private treinoService: TreinosService,
    private router: Router,
    private route: ActivatedRoute,
    private commomService: CommomService
  ) {}

  ngOnInit(): void {
    this.loadStrings();

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.treinoService.readById(id).subscribe((treino) => {
      this.treino = treino;
    });
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

  deleteTreino(): void {
    if (this.treino?.id) {
      this.treinoService.delete(this.treino.id).subscribe(() => {
        this.router.navigate(['/treinos']);
        this.commomService.showMessage('Treino excluído!');
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/treinos']);
  }
}
