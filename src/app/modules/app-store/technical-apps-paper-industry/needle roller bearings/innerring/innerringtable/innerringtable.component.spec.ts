/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerringtableComponent } from './innerringtable.component';

describe('InnerringtableComponent', () => {
  let component: InnerringtableComponent;
  let fixture: ComponentFixture<InnerringtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerringtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerringtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
