import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sphericalthrustrollerbearings',
  templateUrl: './sphericalthrustrollerbearings.component.html',
  styleUrls: ['./sphericalthrustrollerbearings.component.scss'],
})
export class SphericalthrustrollerbearingsComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  r1: number;
  B1: number;
  T: number;
  d1: number;
  A: number;
  C: number;
  D1: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    // this.B = value.boundary_dimensions_mm__B;this.B = value.boundary_dimensions_mm__B
    this.B = value.dimensions_mm__B;
    this.B1 = value.dimensions_mm__B1;
    // this.B1 = value.boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.Da = value.mounting_dimensions_mm_Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.r1 = value.boundary_dimensions_mm_r1_min;
    this.T = value.Boundary_dimensions_mm__T;
    this.d1 = value.dimensions_mm_d1;
    this.A = value.dimensions_mm__A;
    this.da = value.mounting_dimensions_mm_da_min;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.D1 = value.dimensions_mm__D;

    this.C = value.dimensions_mm__C;

    console.log(this.z);
  }
}
