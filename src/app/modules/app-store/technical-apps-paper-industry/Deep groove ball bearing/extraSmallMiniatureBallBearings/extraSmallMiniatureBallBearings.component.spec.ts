/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExtraSmallMiniatureBallBearingsComponent } from './extraSmallMiniatureBallBearings.component';

describe('ExtraSmallMiniatureBallBearingsComponent', () => {
  let component: ExtraSmallMiniatureBallBearingsComponent;
  let fixture: ComponentFixture<ExtraSmallMiniatureBallBearingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraSmallMiniatureBallBearingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraSmallMiniatureBallBearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
