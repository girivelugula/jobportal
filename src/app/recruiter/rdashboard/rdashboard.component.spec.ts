import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RDashboardComponent } from './rdashboard.component';

describe('RDashboardComponent', () => {
  let component: RDashboardComponent;
  let fixture: ComponentFixture<RDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
