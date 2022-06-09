/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MiniatureonewayclutchesComponent } from './Miniatureonewayclutches.component';

describe('MiniatureonewayclutchesComponent', () => {
  let component: MiniatureonewayclutchesComponent;
  let fixture: ComponentFixture<MiniatureonewayclutchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniatureonewayclutchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniatureonewayclutchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
