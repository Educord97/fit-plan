import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcDialogComponent } from './imc-dialog.component';

describe('ImcDialogComponent', () => {
  let component: ImcDialogComponent;
  let fixture: ComponentFixture<ImcDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcDialogComponent]
    });
    fixture = TestBed.createComponent(ImcDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
