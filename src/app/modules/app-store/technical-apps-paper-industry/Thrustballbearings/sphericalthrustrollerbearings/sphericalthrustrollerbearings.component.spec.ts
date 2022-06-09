/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SphericalthrustrollerbearingsComponent } from './sphericalthrustrollerbearings.component';

describe('SphericalthrustrollerbearingsComponent', () => {
  let component: SphericalthrustrollerbearingsComponent;
  let fixture: ComponentFixture<SphericalthrustrollerbearingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphericalthrustrollerbearingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphericalthrustrollerbearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
