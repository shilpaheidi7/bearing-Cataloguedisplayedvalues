/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SelftableAdapterassemliesComponent } from './selftableAdapterassemlies.component';

describe('SelftableAdapterassemliesComponent', () => {
  let component: SelftableAdapterassemliesComponent;
  let fixture: ComponentFixture<SelftableAdapterassemliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelftableAdapterassemliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelftableAdapterassemliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
