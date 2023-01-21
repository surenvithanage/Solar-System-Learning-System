import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTopicManagementComponent } from './sub-topic-management.component';

describe('SubTopicManagementComponent', () => {
  let component: SubTopicManagementComponent;
  let fixture: ComponentFixture<SubTopicManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubTopicManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTopicManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
