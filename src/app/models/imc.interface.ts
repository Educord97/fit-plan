export interface IIMC {
    id?: number;
    peso?: number;
    altura?: number;
    imc?: number;
    resultado?: number;

}

export class IMC implements IIMC {
    constructor(
        public id?: number,
        public peso?: number,
        public altura?: number,
        public imc?: number,
        public resultado?: number
      ) {}
}