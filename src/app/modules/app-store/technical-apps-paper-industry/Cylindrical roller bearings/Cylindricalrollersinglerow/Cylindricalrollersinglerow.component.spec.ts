/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CylindricalrollersinglerowComponent } from './Cylindricalrollersinglerow.component';

describe('CylindricalrollersinglerowComponent', () => {
  let component: CylindricalrollersinglerowComponent;
  let fixture: ComponentFixture<CylindricalrollersinglerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylindricalrollersinglerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylindricalrollersinglerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
