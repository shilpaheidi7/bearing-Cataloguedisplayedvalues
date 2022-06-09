/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SphericalrollerbearingstableComponent } from './sphericalrollerbearingstable.component';

describe('SphericalrollerbearingstableComponent', () => {
  let component: SphericalrollerbearingstableComponent;
  let fixture: ComponentFixture<SphericalrollerbearingstableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphericalrollerbearingstableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphericalrollerbearingstableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
