/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrawncuptypeComponent } from './drawncuptype.component';

describe('DrawncuptypeComponent', () => {
  let component: DrawncuptypeComponent;
  let fixture: ComponentFixture<DrawncuptypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawncuptypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawncuptypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
