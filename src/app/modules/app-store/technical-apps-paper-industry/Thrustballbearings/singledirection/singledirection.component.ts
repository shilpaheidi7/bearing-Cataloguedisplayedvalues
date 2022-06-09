import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singledirection',
  templateUrl: './singledirection.component.html',
  styleUrls: ['./singledirection.component.scss'],
})
export class SingledirectionComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  T2: number;
  Da: number;
  da: number;
  ra: number;
  r1: number;
  B1: number;
  T: number;
  D2: number;
  C: number;
  D1: number;
  D3: number;
  d1: number;
  R: number;
  A: number;
  T1: number;

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
    this.T = value.Boundary_dimensions_mm__T;
    // this.B1 = value.boundary_dimensions_mm__B;
    this.T2 = value.Boundary_dimensions_mm__T2;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.d1 = value.Dimensions_mm_d1_max;
    this.D1 = value.dimensions_mm__D1_min;
    this.D2 = value.dimensions_mm__D2;
    this.D3 = value.dimensions_mm__D3;
    this.A = value.dimensions_mm__A;
    this.R = value.dimensions_mm__R;
    this.C = value.dimensions_mm__C;

    // this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.Da = value.mounting_dimensions_mm_Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.r = value.Boundary_dimensions_mm_r_min;
    // this.C = value.dimensions_mm__C;
    // this.D2 = value.dimensions_mm__D2;
    // this.D1 = value.dimensions_mm__D1_min;
    // this.D3 = value.dimensions_mm__D3;
    // this.d1 = value.dimensions_mm_d1_max;
    this.R = value.dimensions_mm__R;
    this.ra = value.Boundary_dimensions_mm_ra_max;
    this.da = value.Boundary_dimensions_mm_da_min;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.T1 = value.Boundary_dimensions_mm__T1;

    console.log(this.D1);
  }
}
