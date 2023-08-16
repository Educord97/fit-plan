import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IIMC } from 'src/app/models/imc.interface';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';
import { ImcService } from 'src/app/services/imc.service';

@Component({
  selector: 'app-imc-delete-dialog',
  templateUrl: './imc-delete-dialog.component.html',
  styleUrls: ['./imc-delete-dialog.component.css'],
})
export class ImcDeleteDialogComponent {
  imc?: IIMC;
  strings?: PtBRStrings;

  constructor(
    private imcService: ImcService,
    private router: Router,
    private route: ActivatedRoute,
    private commomService: CommomService
  ) {}

  ngOnInit(): void {
    this.loadStrings();

    const id = +this.route.snapshot.paramMap.get('id')!;
    this.imcService.readById(id).subscribe((imc) => {
      this.imc = imc;
    });
  }

  loadStrings(): void {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

  deleteImc(): void {
    if (this.imc?.id) {
      this.imcService.delete(this.imc.id).subscribe(() => {
        this.router.navigate(['/imc']);
        this.commomService.showMessage('IMC excluído!');
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/imc']);
  }
}
