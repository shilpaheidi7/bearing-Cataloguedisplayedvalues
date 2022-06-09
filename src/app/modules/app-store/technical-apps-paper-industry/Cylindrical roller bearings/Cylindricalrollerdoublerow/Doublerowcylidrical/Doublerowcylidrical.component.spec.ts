/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DoublerowcylidricalComponent } from './Doublerowcylidrical.component';

describe('DoublerowcylidricalComponent', () => {
  let component: DoublerowcylidricalComponent;
  let fixture: ComponentFixture<DoublerowcylidricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublerowcylidricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublerowcylidricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
