import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosDeleteComponent } from './treino-delete.component';

describe('TreinosDeleteComponent', () => {
  let component: TreinosDeleteComponent;
  let fixture: ComponentFixture<TreinosDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreinosDeleteComponent]
    });
    fixture = TestBed.createComponent(TreinosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
