import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinosUpdateComponent } from './treinos-update.component';

describe('TreinosUpdateComponent', () => {
  let component: TreinosUpdateComponent;
  let fixture: ComponentFixture<TreinosUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreinosUpdateComponent]
    });
    fixture = TestBed.createComponent(TreinosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
