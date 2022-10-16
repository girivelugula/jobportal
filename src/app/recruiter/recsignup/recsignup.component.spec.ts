import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecSignupComponent } from './recsignup.component';

describe('RecSignupComponent', () => {
  let component: RecSignupComponent;
  let fixture: ComponentFixture<RecSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
