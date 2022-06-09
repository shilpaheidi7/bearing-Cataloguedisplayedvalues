/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrawncuptableComponent } from './drawncuptable.component';

describe('DrawncuptableComponent', () => {
  let component: DrawncuptableComponent;
  let fixture: ComponentFixture<DrawncuptableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawncuptableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawncuptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
