import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressManagementComponent } from './progress-management.component';

describe('ProgressManagementComponent', () => {
  let component: ProgressManagementComponent;
  let fixture: ComponentFixture<ProgressManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
