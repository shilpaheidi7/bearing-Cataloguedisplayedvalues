/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThrustComponent } from './thrust.component';

describe('ThrustComponent', () => {
  let component: ThrustComponent;
  let fixture: ComponentFixture<ThrustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
