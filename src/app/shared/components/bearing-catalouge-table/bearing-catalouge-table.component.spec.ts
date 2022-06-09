/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BearingCatalougeTableComponent } from './bearing-catalouge-table.component';

describe('BearingCatalougeTableComponent', () => {
  let component: BearingCatalougeTableComponent;
  let fixture: ComponentFixture<BearingCatalougeTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BearingCatalougeTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BearingCatalougeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
