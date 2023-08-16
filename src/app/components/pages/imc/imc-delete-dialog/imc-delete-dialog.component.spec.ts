import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcDeleteDialogComponent } from './imc-delete-dialog.component';

describe('ImcDeleteDialogComponent', () => {
  let component: ImcDeleteDialogComponent;
  let fixture: ComponentFixture<ImcDeleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcDeleteDialogComponent]
    });
    fixture = TestBed.createComponent(ImcDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
