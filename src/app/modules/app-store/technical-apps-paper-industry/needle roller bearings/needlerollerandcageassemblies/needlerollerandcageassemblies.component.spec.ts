/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NeedlerollerandcageassembliesComponent } from './needlerollerandcageassemblies.component';

describe('NeedlerollerandcageassembliesComponent', () => {
  let component: NeedlerollerandcageassembliesComponent;
  let fixture: ComponentFixture<NeedlerollerandcageassembliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeedlerollerandcageassembliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeedlerollerandcageassembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
