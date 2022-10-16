import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JcdashComponent } from './jcdash.component';

describe('JcdashComponent', () => {
  let component: JcdashComponent;
  let fixture: ComponentFixture<JcdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JcdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JcdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
