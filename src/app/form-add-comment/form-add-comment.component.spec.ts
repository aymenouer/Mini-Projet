import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddCommentComponent } from './form-add-comment.component';

describe('FormAddCommentComponent', () => {
  let component: FormAddCommentComponent;
  let fixture: ComponentFixture<FormAddCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
