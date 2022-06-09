/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WithdrawalsleevessphericaltableComponent } from './withdrawalsleevessphericaltable.component';

describe('WithdrawalsleevessphericaltableComponent', () => {
  let component: WithdrawalsleevessphericaltableComponent;
  let fixture: ComponentFixture<WithdrawalsleevessphericaltableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalsleevessphericaltableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalsleevessphericaltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
