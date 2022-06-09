/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeavydutyinchseriesComponent } from './heavydutyinchseries.component';

describe('HeavydutyinchseriesComponent', () => {
  let component: HeavydutyinchseriesComponent;
  let fixture: ComponentFixture<HeavydutyinchseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavydutyinchseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavydutyinchseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
