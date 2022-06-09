/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepGrooveComponent } from './deep-groove.component';

describe('DeepGrooveComponent', () => {
  let component: DeepGrooveComponent;
  let fixture: ComponentFixture<DeepGrooveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepGrooveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepGrooveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
