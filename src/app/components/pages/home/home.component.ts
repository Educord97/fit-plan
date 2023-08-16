import { Component, OnInit, Input } from '@angular/core';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  strings?: PtBRStrings;

  imcToParent?: string;
  intensidadeToParent?: string;
  avaliacaoTreinoToParent?: string;
  objetivoToParent?: string;
  avaliacaoEstrelasToParent?: string;

  constructor(private commomService: CommomService) {}

  ngOnInit() {
    this.loadStrings();
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data: PtBRStrings) => {
      this.strings = data;
      this.imcToParent = data.HomeResultados?.imc;
      this.intensidadeToParent = data.HomeResultados?.intensidadeLabel;
      this.objetivoToParent = data.HomeResultados?.objetivoLabel;
      this.avaliacaoEstrelasToParent = data.HomeResultados?.avaliacaoLabel;
    });
  }
}
