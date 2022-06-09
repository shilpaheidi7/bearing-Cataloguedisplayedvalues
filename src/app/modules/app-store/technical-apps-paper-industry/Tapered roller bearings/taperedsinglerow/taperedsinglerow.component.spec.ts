/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaperedsinglerowComponent } from './taperedsinglerow.component';

describe('TaperedsinglerowComponent', () => {
  let component: TaperedsinglerowComponent;
  let fixture: ComponentFixture<TaperedsinglerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaperedsinglerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaperedsinglerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
