export interface IIntensidade {
  id?: number;
  nome?: string;
}

export class Intensidade implements IIntensidade {
  constructor(public id?: number, public nome?: string) {}
}
