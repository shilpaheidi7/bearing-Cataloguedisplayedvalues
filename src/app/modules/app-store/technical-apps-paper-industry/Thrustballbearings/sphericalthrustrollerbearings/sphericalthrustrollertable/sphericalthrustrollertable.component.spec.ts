/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SphericalthrustrollertableComponent } from './sphericalthrustrollertable.component';

describe('SphericalthrustrollertableComponent', () => {
  let component: SphericalthrustrollertableComponent;
  let fixture: ComponentFixture<SphericalthrustrollertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphericalthrustrollertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphericalthrustrollertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
