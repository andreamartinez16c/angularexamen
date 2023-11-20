import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecompraComponent } from './createcompra.component';

describe('CreatecompraComponent', () => {
  let component: CreatecompraComponent;
  let fixture: ComponentFixture<CreatecompraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatecompraComponent]
    });
    fixture = TestBed.createComponent(CreatecompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
