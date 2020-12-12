import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUserComponent } from './footer-user.component';

describe('FooterUserComponent', () => {
  let component: FooterUserComponent;
  let fixture: ComponentFixture<FooterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
