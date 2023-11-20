import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubomarcaComponent } from './cubomarca.component';

describe('CubomarcaComponent', () => {
  let component: CubomarcaComponent;
  let fixture: ComponentFixture<CubomarcaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CubomarcaComponent]
    });
    fixture = TestBed.createComponent(CubomarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
