import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex5Component } from './ex5.component';

describe('Ex5Component', () => {
  let component: Ex5Component;
  let fixture: ComponentFixture<Ex5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ex5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ex5Component);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
