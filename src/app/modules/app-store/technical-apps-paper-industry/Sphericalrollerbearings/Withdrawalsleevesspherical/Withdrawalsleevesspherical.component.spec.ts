/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithdrawalsleevessphericalComponent } from './Withdrawalsleevesspherical.component';

describe('WithdrawalsleevessphericalComponent', () => {
  let component: WithdrawalsleevessphericalComponent;
  let fixture: ComponentFixture<WithdrawalsleevessphericalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsleevessphericalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsleevessphericalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
