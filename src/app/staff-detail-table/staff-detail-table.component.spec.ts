import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffDetailTableComponent } from './staff-detail-table.component';

describe('StaffDetailTableComponent', () => {
  let component: StaffDetailTableComponent;
  let fixture: ComponentFixture<StaffDetailTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffDetailTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffDetailTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
