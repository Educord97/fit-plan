import { Component, OnInit } from '@angular/core';
import { PtBRStrings } from 'src/app/models/pt-br.interface';
import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private commomService: CommomService) {}

  strings?: PtBRStrings;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

}
