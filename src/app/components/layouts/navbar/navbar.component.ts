import { Component, OnInit } from '@angular/core';

import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private commomService: CommomService) {}

  strings: any;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }
}
