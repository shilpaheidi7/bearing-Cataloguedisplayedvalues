/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepgroovesinglerowshieldedComponent } from './deepgroovesinglerowshielded.component';

describe('DeepgroovesinglerowshieldedComponent', () => {
  let component: DeepgroovesinglerowshieldedComponent;
  let fixture: ComponentFixture<DeepgroovesinglerowshieldedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepgroovesinglerowshieldedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepgroovesinglerowshieldedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
