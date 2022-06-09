import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doubledirection',
  templateUrl: './doubledirection.component.html',
  styleUrls: ['./doubledirection.component.scss'],
})
export class DoubledirectionComponent implements OnInit {
  d2: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  rb: number;
  r1: number;
  B1: number;
  d3: number;
  T1: number;
  T3: number;
  T5: number;
  T4: number;
  T6: number;
  D1: number;
  D2: number;
  D3: number;
  T2: number;
  A: number;
  R: number;
  C: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d2 = value.Boundary_dimensions_mm_d2;
    this.D = value.Boundary_dimensions_mm__D;
    this.T2 = value.dimensions_mm__T2;

    this.T4 = value.dimensions_mm__T4;

    // this.B = value.boundary_dimensions_mm__B;this.B = value.boundary_dimensions_mm__B
    this.B = value.boundary_dimensions_mm__B;
    this.T3 = value.Boundary_dimensions_mm__T3;

    // this.B1 = value.boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.T6 = value.dimensions_mm__T6;

    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.D1 = value.dimensions_mm__D1_min;

    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.Da = value.mounting_dimensions_mm_Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.T1 = value.Boundary_dimensions_mm__T1;
    this.T5 = value.Boundary_dimensions_mm__T5;
    this.d3 = value.dimensions_mm_d3_max;
    this.D2 = value.dimensions_mm__D2;
    this.D3 = value.dimensions_mm__D3;
    this.A = value.dimensions_mm__A;

    this.R = value.dimensions_mm__R;
    this.B = value.dimensions_mm__B;
    this.C = value.dimensions_mm__C;
    this.da = value.mounting_dimensions_mm_da_min;

    this.Da = value.mounting_dimensions_mm__Da_max;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.rb = value.mounting_dimensions_mm_rb_max;

    console.log(this.r1);
  }
}
