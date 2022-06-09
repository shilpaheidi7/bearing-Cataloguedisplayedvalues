/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InchseriesComponent } from './inchseries.component';

describe('InchseriesComponent', () => {
  let component: InchseriesComponent;
  let fixture: ComponentFixture<InchseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InchseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InchseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
