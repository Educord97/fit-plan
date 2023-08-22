import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITreino } from 'src/app/components/models/treino.model';
import { CommomService } from 'src/app/services/commom-services.service';
import { TreinosService } from 'src/app/services/treinos.service';

@Component({
  selector: 'app-treinos-update',
  templateUrl: './treinos-update.component.html',
  styleUrls: ['./treinos-update.component.css'],
})
export class TreinosUpdateComponent implements OnInit {
  treino: ITreino = {};


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commomService: CommomService,
    private treinoService: TreinosService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.treinoService.readById(id).subscribe((treino) => {
      this.treino = treino;
    });
  }

  updateTreino(): void {
    this.treinoService.update(this.treino).subscribe(() => {
      this.commomService.showMessage("Treino atualizado com sucesso!");
      this.router.navigate(["/treinos"]);
    });
  }

  cancelar(): void {
    this.router.navigate(['treinos']);
  }
}
