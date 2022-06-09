/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AngularContactComponent } from './angular-contact.component';

describe('AngularContactComponent', () => {
  let component: AngularContactComponent;
  let fixture: ComponentFixture<AngularContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
