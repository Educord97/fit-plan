import { Component, OnInit } from '@angular/core';
import { IIMC } from 'src/app/models/imc.interface';
import { ImcService } from 'src/app/services/imc.service';

@Component({
  selector: 'app-imc-dialog',
  templateUrl: './imc-dialog.component.html',
  styleUrls: ['./imc-dialog.component.css']
})
export class ImcDialogComponent implements OnInit{

  constructor(private imcService: ImcService) {}

  imcs: IIMC[] = []

  displayedColumns = ['id', 'peso', 'altura', 'resultado', 'action']

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.imcService.getIMC().subscribe(imcs => {
      this.imcs = imcs.body || []
    })
  }
}
