import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex7Component } from './ex7.component';

describe('Ex7Component', () => {
  let component: Ex7Component;
  let fixture: ComponentFixture<Ex7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex7Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
