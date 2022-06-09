/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CylindricalrollerdoublerowComponent } from './Cylindricalrollerdoublerow.component';

describe('CylindricalrollerdoublerowComponent', () => {
  let component: CylindricalrollerdoublerowComponent;
  let fixture: ComponentFixture<CylindricalrollerdoublerowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CylindricalrollerdoublerowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CylindricalrollerdoublerowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
