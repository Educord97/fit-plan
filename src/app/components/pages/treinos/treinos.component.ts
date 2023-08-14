import { Component, OnInit } from '@angular/core';

import { CommomService } from 'src/app/services/commom-services.service';
import { TreinosService } from 'src/app/services/treinos.service';
import { ITreino, Treino } from '../../models/treino.model';
import { Objetivo } from '../../models/objetivo.model';
import { HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css'],
})
export class TreinosComponent implements OnInit {
  constructor(
    private commomService: CommomService,
    private treinoService: TreinosService,
    private fb: FormBuilder
  ) {
  }

  strings: any;
  treinos: Treino[] = [];
  objetivos?: Objetivo[] = [];

  selection = new SelectionModel<Treino>(false, []);
  selectedItem = <Treino>{};

  displayedColumns: string[] = ['treinos','segunda', 'terca', 'quarta', 'quinta', 'sexta'];
  clickedRows = new Set<Treino>();

  editForm = this.fb.group({
    id: [],
    aluno: [null, [Validators.maxLength(255)]]
  });

  ngOnInit() {
   this.readTreinos();
   this.readObjetivos();
   this.readStrings();
  }



  save(): void {
    const treino = this.createFromForm();
      this.subscribeToSaveResponse(this.treinoService.createTreino(treino));
  }

   createFromForm(): Treino {
    return {
      ...new Treino(),
      id: this.editForm.get(['id'])!.value,
      aluno: this.editForm.get(['aluno'])!.value,
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITreino>>): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    console.log("CRIADO COM SUCESSO")
  }

  protected onSaveError(): void {
    console.log("ERRO!!!")
  }
  readTreinos(): void {
    this.treinoService.getTreinos().subscribe((res: HttpResponse<Treino[]>) => {
      this.treinos = res.body || [];
      console.log(this.treinos)
    });
  }

  readObjetivos(): void {
    this.treinoService.getObjetivos().subscribe((res: HttpResponse<Objetivo[]>) => {
        this.objetivos = res.body || [];
    })
  }

  criarTreino() {
 
  }

  selecionarObjetivo(event: any) {
    const idSelecionado = event.target.value;
    console.log('Objetivo selecionado:', idSelecionado);
  }

  readStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }
  
  selectItem(row: Treino) {
    this.selection.toggle(row);
    this.selectedItem = row;
    console.log(this.selectedItem)
  }

  onRadioChange(rowIndex: number): void {
    console.log('Linha selecionada:', this.treinos[rowIndex]);
  }
  cancelar(): void {

  }
  
}
