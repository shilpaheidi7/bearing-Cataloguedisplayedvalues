/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularcontactsinglerowComponent } from './Angularcontactsinglerow.component';

describe('AngularcontactsinglerowComponent', () => {
  let component: AngularcontactsinglerowComponent;
  let fixture: ComponentFixture<AngularcontactsinglerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularcontactsinglerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularcontactsinglerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
