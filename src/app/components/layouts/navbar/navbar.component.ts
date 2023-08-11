import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CommomService } from 'src/app/services/commom-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private commomService: CommomService, private router: Router) {}

  strings: any;

  ngOnInit() {
    this.commomService.getStrings().subscribe((data) => {
      this.strings = data;
    });
  }

  goToSobre(): void {
    this.router.navigate(['/sobre']);
  }

  goToTreinos(): void {
    this.router.navigate(['/treinos']);
  }
  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  
}
