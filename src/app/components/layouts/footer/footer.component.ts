import { Component, OnInit } from '@angular/core';
import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private commomService: CommomService) {}

  strings: any;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

}
