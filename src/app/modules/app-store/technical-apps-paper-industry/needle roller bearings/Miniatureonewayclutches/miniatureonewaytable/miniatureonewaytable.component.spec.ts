/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiniatureonewaytableComponent } from './miniatureonewaytable.component';

describe('MiniatureonewaytableComponent', () => {
  let component: MiniatureonewaytableComponent;
  let fixture: ComponentFixture<MiniatureonewaytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniatureonewaytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureonewaytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
