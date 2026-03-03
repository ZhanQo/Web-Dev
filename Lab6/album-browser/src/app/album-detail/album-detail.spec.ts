import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsDetail } from './album-detail';

describe('AlbumsDetail', () => {
  let component: AlbumsDetail;
  let fixture: ComponentFixture<AlbumsDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumsDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbumsDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
