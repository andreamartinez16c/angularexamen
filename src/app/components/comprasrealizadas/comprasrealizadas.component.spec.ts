import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasrealizadasComponent } from './comprasrealizadas.component';

describe('ComprasrealizadasComponent', () => {
  let component: ComprasrealizadasComponent;
  let fixture: ComponentFixture<ComprasrealizadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComprasrealizadasComponent]
    });
    fixture = TestBed.createComponent(ComprasrealizadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
