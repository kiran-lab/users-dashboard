import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleDistributionChartComponent } from './role-distribution-chart.component';

describe('RoleDistributionChartComponent', () => {
  let component: RoleDistributionChartComponent;
  let fixture: ComponentFixture<RoleDistributionChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RoleDistributionChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RoleDistributionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
