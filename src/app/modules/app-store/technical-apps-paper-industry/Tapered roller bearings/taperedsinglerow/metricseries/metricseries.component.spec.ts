/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MetricseriesComponent } from './metricseries.component';

describe('MetricseriesComponent', () => {
  let component: MetricseriesComponent;
  let fixture: ComponentFixture<MetricseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
