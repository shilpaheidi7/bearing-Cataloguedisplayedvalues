import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Angularcontactmatchedpair',
  templateUrl: './Angularcontactmatchedpair.component.html',
  styleUrls: ['./Angularcontactmatchedpair.component.scss'],
})
export class AngularcontactmatchedpairComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  Db: number;
  da: number;
  ra: number;
  B1: number;
  r1: number;
  a1: number;
  a2: number;
  rb: number;
  db: number;
  DB: number;
  DF: number;
  DT: number;

  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    // this.B1 = value.boundary_dimensionsmm__B1;
    // this.B1 = value.boundary_dimensionsmm__B1;
    this.B = value.Boundary_dimensions_mm__B1;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.Mounting_dimensions_Da_max;
    this.da = value.Mounting_dimensions_da_min;
    // this.B1 = value.boundary_dimensionsmm__B1;
    this.ra = value.Mounting_dimensions_ra_max;
    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.a1 = value.Load_center_spread_mm_a1;
    this.a2 = value.Load_center_spread_mm_a2;
    this.ra = value.Mounting_dimensions_ra_max;
    this.rb = value.Mounting_dimensions_rb_max;
    this.Db = value.Mounting_dimensions_Db_max;
    this.db = value.Mounting_dimensions_db_min;
    this.DT = value.Bearing_No_DT;
    this.DF = value.BearingNo_DF;
    this.DB = value.Bearing_No_DB;

    console.log(this.z);
  }
}
