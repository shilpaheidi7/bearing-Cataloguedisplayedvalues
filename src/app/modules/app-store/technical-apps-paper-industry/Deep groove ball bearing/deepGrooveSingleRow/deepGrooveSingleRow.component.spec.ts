/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DeepGrooveSingleRowComponent } from './deepGrooveSingleRow.component';

describe('DeepGrooveSingleRowComponent', () => {
  let component: DeepGrooveSingleRowComponent;
  let fixture: ComponentFixture<DeepGrooveSingleRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepGrooveSingleRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepGrooveSingleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
