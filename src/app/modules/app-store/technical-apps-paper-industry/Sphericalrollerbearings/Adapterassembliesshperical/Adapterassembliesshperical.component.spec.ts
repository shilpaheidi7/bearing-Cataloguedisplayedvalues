/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdapterassembliesshpericalComponent } from './Adapterassembliesshperical.component';

describe('AdapterassembliesshpericalComponent', () => {
  let component: AdapterassembliesshpericalComponent;
  let fixture: ComponentFixture<AdapterassembliesshpericalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdapterassembliesshpericalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdapterassembliesshpericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
