/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularcontactmatchedpairComponent } from './Angularcontactmatchedpair.component';

describe('AngularcontactmatchedpairComponent', () => {
  let component: AngularcontactmatchedpairComponent;
  let fixture: ComponentFixture<AngularcontactmatchedpairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcontactmatchedpairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcontactmatchedpairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
