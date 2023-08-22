import { IIntensidade } from './intensidade.model';
import { IObjetivo } from './objetivo.model';

export interface ITreino {
  id?: number;
  nome?: string;
  diasSemana?: string[];
  objetivos?: IObjetivo[];
  intensidades?: IIntensidade[];
  selected?: boolean;
}

export class Treino implements ITreino {
  constructor(
    public id?: number,
    public nome?: string,
    public diasSemana?: string[],
    public objetivos?: IObjetivo[],
    public intensidades?: IIntensidade[],
    public selected?: boolean
  ) {}
}
