import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Miniatureonewayclutches',
  templateUrl: './Miniatureonewayclutches.component.html',
  styleUrls: ['./Miniatureonewayclutches.component.scss'],
})
export class MiniatureonewayclutchesComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Fw: number;
  D1: number;
  D2: number;
  A: number;
  HD: number;
  a: number;
  b: number;
  Da2: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.boundary_dimensions_mm_d;
    this.D = value.boundary_dimensions_mm__D;
    this.B = value.Boundary_dimensions_mm__B;
    this.r = value.recommended_housing_dimensions_mm_r;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.recommended_housing_dimensions_mm_Da;
    this.Da2 = value.recommended_housing_dimensions_mm_D2;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.Fw = value.Boundary_dimensions_mm__Fw;
    this.D1 = value.Boundary_dimensions_mm__D1;
    this.D2 = value.Boundary_dimensions_mm__D2;
    this.A = value.Boundary_dimensions_mm__A;

    this.HD = value.recommended_housing_dimensions_mm_HD;

    this.a = value.recommended_housing_dimensions_mm_a;

    this.b = value.recommended_housing_dimensions_mm_b;

    this.r = value.recommended_housing_dimensions_mm_r;

    console.log(this.z);
  }
}
