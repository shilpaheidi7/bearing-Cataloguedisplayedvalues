/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Combinedmetricseries2Component } from './combinedmetricseries2.component';

describe('Combinedmetricseries2Component', () => {
  let component: Combinedmetricseries2Component;
  let fixture: ComponentFixture<Combinedmetricseries2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Combinedmetricseries2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Combinedmetricseries2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
