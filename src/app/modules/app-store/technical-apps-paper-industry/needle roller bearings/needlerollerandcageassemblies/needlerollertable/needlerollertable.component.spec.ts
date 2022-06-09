/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeedlerollertableComponent } from './needlerollertable.component';

describe('NeedlerollertableComponent', () => {
  let component: NeedlerollertableComponent;
  let fixture: ComponentFixture<NeedlerollertableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedlerollertableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedlerollertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
