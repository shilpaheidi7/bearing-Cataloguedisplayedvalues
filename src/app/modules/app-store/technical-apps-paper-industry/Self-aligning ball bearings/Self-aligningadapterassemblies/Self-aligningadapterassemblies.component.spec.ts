/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelfAligningadapterassembliesComponent } from './Self-aligningadapterassemblies.component';

describe('SelfAligningadapterassembliesComponent', () => {
  let component: SelfAligningadapterassembliesComponent;
  let fixture: ComponentFixture<SelfAligningadapterassembliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfAligningadapterassembliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfAligningadapterassembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
