/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TapereddoublerowComponent } from './tapereddoublerow.component';

describe('TapereddoublerowComponent', () => {
  let component: TapereddoublerowComponent;
  let fixture: ComponentFixture<TapereddoublerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TapereddoublerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TapereddoublerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
