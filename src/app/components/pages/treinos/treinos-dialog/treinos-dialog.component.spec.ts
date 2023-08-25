import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosTreinosDialogComponent } from './treinos-dialog.component';

describe('ResultadosTreinosDialogComponent', () => {
  let component: ResultadosTreinosDialogComponent;
  let fixture: ComponentFixture<ResultadosTreinosDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultadosTreinosDialogComponent]
    });
    fixture = TestBed.createComponent(ResultadosTreinosDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
