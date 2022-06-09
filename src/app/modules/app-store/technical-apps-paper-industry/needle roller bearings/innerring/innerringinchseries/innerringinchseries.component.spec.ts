/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InnerringinchseriesComponent } from './innerringinchseries.component';

describe('InnerringinchseriesComponent', () => {
  let component: InnerringinchseriesComponent;
  let fixture: ComponentFixture<InnerringinchseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerringinchseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerringinchseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
