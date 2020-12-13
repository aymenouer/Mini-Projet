import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStoryComponent } from './list-story.component';

describe('ListStoryComponent', () => {
  let component: ListStoryComponent;
  let fixture: ComponentFixture<ListStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
