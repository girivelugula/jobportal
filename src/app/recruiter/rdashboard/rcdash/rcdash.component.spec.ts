import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcdashComponent } from './rcdash.component';

describe('RcdashComponent', () => {
  let component: RcdashComponent;
  let fixture: ComponentFixture<RcdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RcdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RcdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
