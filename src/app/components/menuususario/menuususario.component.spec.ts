import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuususarioComponent } from './menuususario.component';

describe('MenuususarioComponent', () => {
  let component: MenuususarioComponent;
  let fixture: ComponentFixture<MenuususarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuususarioComponent]
    });
    fixture = TestBed.createComponent(MenuususarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
