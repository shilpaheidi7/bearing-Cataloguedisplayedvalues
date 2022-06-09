import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cylindricalrollersinglerow',
  templateUrl: './Cylindricalrollersinglerow.component.html',
  styleUrls: ['./Cylindricalrollersinglerow.component.scss'],
})
export class CylindricalrollersinglerowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  r1: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Fw: number;
  Ew: number;
  db: number;
  dc: number;
  dd: number;
  rb: number;
  NU: number;
  NJ: number;
  NUP: number;
  N: number;
  NF: number;
  dbt1: number;
  Db: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    this.B = value.Boundary_dimensions_mm__B;
    this.db = value.mounting_dimensions_mm_db_max;
    //this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.r = value.boundary_dimensions_mm__r_min;
    this.r1 = value.boundary_dimensions_mm__r1_min;
    this.Fw = value.Boundary_dimensions_mm__Fw;
    this.Ew = value.Boundary_dimensions_mm__Ew;
    this.dc = value.mounting_dimensions_mm_dc_min;
    this.dd = value.mounting_dimensions_mm_dd_min;
    this.ra = value.mounting_dimensions_mm_ra_max;

    this.rb = value.mounting_dimensions_mm_rb_max;
    this.NU = value.Bearing_No_NU;
    this.NJ = value.Bearing_No_NJ;
    this.NUP = value.Bearing_No_NUP;
    this.N = value.Bearing_No_N;
    this.NF = value.Bearing_No_NF;
    // this.dbt1 = value.mounting_dimensions_mm_db_min;
    this.Db = value.mounting_dimensions_mm__Db_max;

    console.log(this.z);
  }
}
