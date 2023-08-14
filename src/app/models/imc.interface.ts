export interface IIMC {
    id?: number;
    peso?: number;
    altura?: number;
    resultado?: string;

}

export class IMC implements IIMC {
    constructor(
        public id?: number,
        public peso?: number,
        public altura?: number,
        public resultado?: string
      ) {}
}