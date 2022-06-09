/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TDItypeComponent } from './TDItype.component';

describe('TDItypeComponent', () => {
  let component: TDItypeComponent;
  let fixture: ComponentFixture<TDItypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TDItypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TDItypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
