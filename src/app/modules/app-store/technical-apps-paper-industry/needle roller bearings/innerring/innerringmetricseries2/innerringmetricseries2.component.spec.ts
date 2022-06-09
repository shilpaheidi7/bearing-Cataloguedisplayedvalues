/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Innerringmetricseries2Component } from './innerringmetricseries2.component';

describe('Innerringmetricseries2Component', () => {
  let component: Innerringmetricseries2Component;
  let fixture: ComponentFixture<Innerringmetricseries2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Innerringmetricseries2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Innerringmetricseries2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
