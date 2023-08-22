import { Component, OnInit } from '@angular/core';
import { PtBRStrings } from 'src/app/models/pt-br.interface';

import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css'],
})
export class SobreComponent implements OnInit {
  constructor(private commomService: CommomService) {}

  strings?: PtBRStrings;

  ngOnInit() {
    this.loadStrings();
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }
}
