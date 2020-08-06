import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaTrackerComponent } from './india-tracker.component';

describe('IndiaTrackerComponent', () => {
  let component: IndiaTrackerComponent;
  let fixture: ComponentFixture<IndiaTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
