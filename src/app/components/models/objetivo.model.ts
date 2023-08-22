export interface IObjetivo {
    id?: number;
    nome?: string;
}

export class Objetivo implements IObjetivo {
  constructor(
    public id?: number,
    public nome?: string
  ) {}
}
