/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TDOtypeComponent } from './TDOtype.component';

describe('TDOtypeComponent', () => {
  let component: TDOtypeComponent;
  let fixture: ComponentFixture<TDOtypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDOtypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDOtypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
