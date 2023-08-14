import { Component, OnInit } from '@angular/core';
import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private commomService: CommomService) {}

  strings: any;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }
}
