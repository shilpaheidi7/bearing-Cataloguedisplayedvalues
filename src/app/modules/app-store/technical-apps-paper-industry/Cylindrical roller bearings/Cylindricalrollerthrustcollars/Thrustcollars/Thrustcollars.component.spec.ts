/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThrustcollarsComponent } from './Thrustcollars.component';

describe('ThrustcollarsComponent', () => {
  let component: ThrustcollarsComponent;
  let fixture: ComponentFixture<ThrustcollarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrustcollarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrustcollarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
