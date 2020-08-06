import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldTrackerComponent } from './world-tracker.component';

describe('WorldTrackerComponent', () => {
  let component: WorldTrackerComponent;
  let fixture: ComponentFixture<WorldTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorldTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
