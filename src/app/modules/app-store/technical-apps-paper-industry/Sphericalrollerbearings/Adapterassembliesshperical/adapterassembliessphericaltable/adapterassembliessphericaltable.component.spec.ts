/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdapterassembliessphericaltableComponent } from './adapterassembliessphericaltable.component';

describe('AdapterassembliessphericaltableComponent', () => {
  let component: AdapterassembliessphericaltableComponent;
  let fixture: ComponentFixture<AdapterassembliessphericaltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterassembliessphericaltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterassembliessphericaltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
