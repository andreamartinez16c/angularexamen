import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarsesionComponent } from './cerrarsesion.component';

describe('CerrarsesionComponent', () => {
  let component: CerrarsesionComponent;
  let fixture: ComponentFixture<CerrarsesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CerrarsesionComponent]
    });
    fixture = TestBed.createComponent(CerrarsesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
