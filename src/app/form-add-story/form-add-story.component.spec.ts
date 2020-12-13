import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddStoryComponent } from './form-add-story.component';

describe('FormAddStoryComponent', () => {
  let component: FormAddStoryComponent;
  let fixture: ComponentFixture<FormAddStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
