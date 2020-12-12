import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventComponent } from './detail-event.component';

describe('DetailEventComponent', () => {
  let component: DetailEventComponent;
  let fixture: ComponentFixture<DetailEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
