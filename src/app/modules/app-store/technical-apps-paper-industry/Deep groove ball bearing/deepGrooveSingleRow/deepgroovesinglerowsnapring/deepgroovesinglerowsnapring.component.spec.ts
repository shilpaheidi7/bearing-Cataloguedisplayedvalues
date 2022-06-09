/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepgroovesinglerowsnapringComponent } from './deepgroovesinglerowsnapring.component';

describe('DeepgroovesinglerowsnapringComponent', () => {
  let component: DeepgroovesinglerowsnapringComponent;
  let fixture: ComponentFixture<DeepgroovesinglerowsnapringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepgroovesinglerowsnapringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepgroovesinglerowsnapringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
