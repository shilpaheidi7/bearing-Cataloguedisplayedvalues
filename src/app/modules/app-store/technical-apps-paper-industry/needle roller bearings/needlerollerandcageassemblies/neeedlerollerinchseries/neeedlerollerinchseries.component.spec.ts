/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeeedlerollerinchseriesComponent } from './neeedlerollerinchseries.component';

describe('NeeedlerollerinchseriesComponent', () => {
  let component: NeeedlerollerinchseriesComponent;
  let fixture: ComponentFixture<NeeedlerollerinchseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeeedlerollerinchseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeeedlerollerinchseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
