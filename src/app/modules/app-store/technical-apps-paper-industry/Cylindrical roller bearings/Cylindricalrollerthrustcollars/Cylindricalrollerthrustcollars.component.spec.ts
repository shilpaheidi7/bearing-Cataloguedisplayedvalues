/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CylindricalrollerthrustcollarsComponent } from './Cylindricalrollerthrustcollars.component';

describe('CylindricalrollerthrustcollarsComponent', () => {
  let component: CylindricalrollerthrustcollarsComponent;
  let fixture: ComponentFixture<CylindricalrollerthrustcollarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylindricalrollerthrustcollarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylindricalrollerthrustcollarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
