/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThrusttableComponent } from './thrusttable.component';

describe('ThrusttableComponent', () => {
  let component: ThrusttableComponent;
  let fixture: ComponentFixture<ThrusttableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThrusttableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrusttableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
