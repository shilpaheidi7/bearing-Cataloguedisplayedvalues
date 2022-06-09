import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-innerring',
  templateUrl: './innerring.component.html',
  styleUrls: ['./innerring.component.scss'],
})
export class InnerringComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  F: number;
  Ft2: number;
  Ft3: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.boundary_dimensions_mm__D;
    this.B = value.Boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;

    this.F = value.Boundary_dimensions_mm__F;
    this.Ft2 = value.Boundary_dimensions_mm__F_1;
    this.Ft3 = value.Boundary_dimensions_mm__F;

    console.log(this.z);
  }
}
