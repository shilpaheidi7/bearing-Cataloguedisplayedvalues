/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeavydutytypeComponent } from './heavydutytype.component';

describe('HeavydutytypeComponent', () => {
  let component: HeavydutytypeComponent;
  let fixture: ComponentFixture<HeavydutytypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeavydutytypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeavydutytypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
