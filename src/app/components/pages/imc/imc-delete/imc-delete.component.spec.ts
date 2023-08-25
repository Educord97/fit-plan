import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcDeleteComponent } from './imc-delete.component';

describe('ImcDeleteComponent', () => {
  let component: ImcDeleteComponent;
  let fixture: ComponentFixture<ImcDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImcDeleteComponent]
    });
    fixture = TestBed.createComponent(ImcDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
