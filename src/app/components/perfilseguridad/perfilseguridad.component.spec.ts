import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilseguridadComponent } from './perfilseguridad.component';

describe('PerfilseguridadComponent', () => {
  let component: PerfilseguridadComponent;
  let fixture: ComponentFixture<PerfilseguridadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilseguridadComponent]
    });
    fixture = TestBed.createComponent(PerfilseguridadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
