import { Component, OnInit } from '@angular/core';

import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {
  
  constructor(private commomService: CommomService) {}

  strings: any;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }
}
