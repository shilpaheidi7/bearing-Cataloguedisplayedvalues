/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerringComponent } from './innerring.component';

describe('InnerringComponent', () => {
  let component: InnerringComponent;
  let fixture: ComponentFixture<InnerringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
