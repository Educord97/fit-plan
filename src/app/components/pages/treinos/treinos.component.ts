import { Component, OnInit } from '@angular/core';

import { CommomService } from 'src/app/services/commom-services.service';
import { TreinosService } from 'src/app/services/treinos.service';
import { ITreino, Treino } from '../../models/treino.model';
import { IObjetivo } from '../../models/objetivo.model';
import { HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TreinosDialogComponent } from './treinos-dialog/treinos-dialog.component';
import { IIntensidade } from '../../models/intensidade.model';

@Component({
  selector: 'app-treinos',
  templateUrl: './treinos.component.html',
  styleUrls: ['./treinos.component.css'],
})
export class TreinosComponent implements OnInit {
  constructor(
    private commomService: CommomService,
    private treinoService: TreinosService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  strings: any;
  treinos: Treino[] = [];
  objetivos?: IObjetivo[] = [];
  intensidades?: IIntensidade[] = [];

  selection = new SelectionModel<Treino>(false, []);
  selectedItem = <Treino>{};

  displayedColumns: string[] = [
    'treinos',
    'segunda',
    'terca',
    'quarta',
    'quinta',
    'sexta',
  ];
  clickedRows = new Set<Treino>();

  radioControl = new FormControl(); // FormControl para os botões de rádio

  editForm = this.fb.group({
    id: [],
    nome: [null, [Validators.required, Validators.maxLength(255)]],
    objetivo: [null, Validators.required],
    intensidade: [null, Validators.required],
  });

  ngOnInit() {
    this.readTreinos();
    this.readObjetivos();
    this.readIntensidades()
    this.readStrings();
  }

  isSaveButtonDisabled(): boolean {
    return this.editForm.invalid || !this.radioControl.value;
  }

  isRadioSelected(): boolean {
    return !!this.radioControl.value;
  }

  save(): void {
    const treino = this.createFromForm();
    this.subscribeToSaveResponse(this.treinoService.createTreino(treino));
    console.log(treino)
  }

  createFromForm(): Treino {
    return {
      ...new Treino(),
      id: this.editForm.get(['id'])!.value,
      nome: this.editForm.get(['nome'])!.value,
      objetivos: [this.editForm.get(['objetivo'])!.value],
      intensidades: [this.editForm.get(['intensidade'])!.value],
      selected: this.radioControl.value,
    };

  }

  protected subscribeToSaveResponse(
    result: Observable<HttpResponse<ITreino>>
  ): void {
    result.subscribe(
      () => this.onSaveSuccess(),
      () => this.onSaveError()
    );
  }

  protected onSaveSuccess(): void {
    console.log('CRIADO COM SUCESSO');
  }

  protected onSaveError(): void {
    console.log('ERRO!!!');
  }

  compareObjetivos(objetivo1: IObjetivo, objetivo2: IObjetivo): boolean {
    return objetivo1 && objetivo2
      ? objetivo1.id === objetivo2.id
      : objetivo1 === objetivo2;
  }

  readTreinos(): void {
    this.treinoService.getTreinos().subscribe((res: HttpResponse<Treino[]>) => {
      this.treinos = res.body || [];
      console.log(this.treinos);
    });
  }

  readObjetivos(): void {
    this.treinoService
      .getObjetivos()
      .subscribe((res: HttpResponse<IObjetivo[]>) => {
        this.objetivos = res.body || [];
      });
  }

  readIntensidades(): void {
    this.treinoService
      .getIntensidades()
      .subscribe((res: HttpResponse<IIntensidade[]>) => {
        this.intensidades = res.body || [];
        console.log('INTENSIDADES: ' + this.intensidades)
      });
  }

  readStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

  selectItem(row: Treino) {
    this.selection.toggle(row);
    this.selectedItem = row;
    console.log(this.selectedItem);
  }

  openDialog() {
    this.dialog.open(TreinosDialogComponent);
  }

  cancelar(): void {
    this.router.navigate(['']);
  }
}
