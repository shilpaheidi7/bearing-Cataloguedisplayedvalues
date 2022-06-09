/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SphericalrollerbearingsComponent } from './Sphericalrollerbearings.component';

describe('SphericalrollerbearingsComponent', () => {
  let component: SphericalrollerbearingsComponent;
  let fixture: ComponentFixture<SphericalrollerbearingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SphericalrollerbearingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SphericalrollerbearingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
