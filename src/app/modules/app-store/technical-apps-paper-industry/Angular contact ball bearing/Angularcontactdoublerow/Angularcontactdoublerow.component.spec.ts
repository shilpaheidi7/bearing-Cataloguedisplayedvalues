/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularcontactdoublerowComponent } from './Angularcontactdoublerow.component';

describe('AngularcontactdoublerowComponent', () => {
  let component: AngularcontactdoublerowComponent;
  let fixture: ComponentFixture<AngularcontactdoublerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcontactdoublerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcontactdoublerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
