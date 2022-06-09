/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeedlerollerthrustmetricseriesComponent } from './Needlerollerthrustmetricseries.component';

describe('NeedlerollerthrustmetricseriesComponent', () => {
  let component: NeedlerollerthrustmetricseriesComponent;
  let fixture: ComponentFixture<NeedlerollerthrustmetricseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedlerollerthrustmetricseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedlerollerthrustmetricseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
