/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SinglerowcylindricalComponent } from './singlerowcylindrical.component';

describe('SinglerowcylindricalComponent', () => {
  let component: SinglerowcylindricalComponent;
  let fixture: ComponentFixture<SinglerowcylindricalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglerowcylindricalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglerowcylindricalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
