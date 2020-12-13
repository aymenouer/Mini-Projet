import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailStorieComponent } from './detail-storie.component';

describe('DetailStorieComponent', () => {
  let component: DetailStorieComponent;
  let fixture: ComponentFixture<DetailStorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailStorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailStorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
