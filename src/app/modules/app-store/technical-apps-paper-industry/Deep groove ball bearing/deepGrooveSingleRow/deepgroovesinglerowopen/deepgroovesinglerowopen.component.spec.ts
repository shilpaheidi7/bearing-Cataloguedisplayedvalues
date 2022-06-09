/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepgroovesinglerowopenComponent } from './deepgroovesinglerowopen.component';

describe('DeepgroovesinglerowopenComponent', () => {
  let component: DeepgroovesinglerowopenComponent;
  let fixture: ComponentFixture<DeepgroovesinglerowopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepgroovesinglerowopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepgroovesinglerowopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
