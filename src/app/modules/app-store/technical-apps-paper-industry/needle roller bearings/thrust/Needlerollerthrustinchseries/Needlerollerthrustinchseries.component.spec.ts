/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeedlerollerthrustinchseriesComponent } from './Needlerollerthrustinchseries.component';

describe('NeedlerollerthrustinchseriesComponent', () => {
  let component: NeedlerollerthrustinchseriesComponent;
  let fixture: ComponentFixture<NeedlerollerthrustinchseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedlerollerthrustinchseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedlerollerthrustinchseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
