import { Objetivo } from './objetivo.model';

export interface ITreino {
  id?: number;
  nome?: string;
  aluno?: string;
  diasSemana?: string[];
  objetivos?: Objetivo[]; // Adicionado a propriedade objetivos
  selected?: boolean;
}

export class Treino implements ITreino {
  constructor(
    public id?: number,
    public nome?: string,
    public aluno?: string,
    public diasSemana?: string[],
    public objetivos?: Objetivo[],
    public selected?: boolean
  ) {}
}
