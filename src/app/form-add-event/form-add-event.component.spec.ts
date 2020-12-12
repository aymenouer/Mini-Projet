import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEventComponent } from './form-add-event.component';

describe('FormAddEventComponent', () => {
  let component: FormAddEventComponent;
  let fixture: ComponentFixture<FormAddEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
