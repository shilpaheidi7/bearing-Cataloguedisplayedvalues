import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taperedsinglerow',
  templateUrl: './taperedsinglerow.component.html',
  styleUrls: ['./taperedsinglerow.component.scss'],
})
export class TaperedsinglerowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  db: number;
  rb: number;
  r1: number;
  C: number;
  T: number;
  sa: number;
  sb: number;
  a: number;
  r1t2: number;
  searchText!: string;
  values: any;
  Tt2: number;
  Ct2: number;
  at2: number;
  Dat2: number;
  dbt2: number;
  dat2: number;
  Dbt2: number;
  rat2: number;
  rbt2: number;
  Sa: number;
  Sb: number;
  Db: number;
  dat1: number;
  dt2: number;
  Dt2: number;
  Bt2: number;
  rt2: number;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    this.B = value.Boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.C = value.Boundary_dimensions_mm__C;
    this.T = value.Boundary_dimensions_mm__T;
    this.a = value.load_center_mm_a;
    // this.r1t2 = value.boundary_dimensions_mm__r1_min;
    // this.Tt2 = value.boundary_dimensions_mm__T;
    this.Ct2 = value.Boundary_dimensions_mm__C;
    // this.at2 = value.load_center_mm_a;
    this.Dat2 = value.mounting_dimensions_mm__Da;
    this.dbt2 = value.mounting_dimensions_mm_db;
    this.dat2 = value.mounting_dimensions_mm_da;
    this.Dbt2 = value.mounting_dimensions_mm__Db;
    this.rat2 = value.mounting_dimensions_mm_ra_max;
    this.rbt2 = value.mounting_dimensions_mm_rb_max;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.rb = value.Mounting_dimensions_mm_rb_min;
    this.a = value.Load_center_mm_a;
    this.Sa = value.Mounting_dimensions_mm_sa_min;
    this.Sb = value.Mounting_dimensions_mm_sb_min;
    this.dat1 = value.Mounting_dimensions_mm_da;
    this.Da = value.Mounting_dimensions_mm__Da_max;
    this.Db = value.Mounting_dimensions_mm_db_min;
    this.db = value.Mounting_dimensions_mm_db_max;
    this.dt2 = value.Boundary_dimensions_mm_d;
    this.Dt2 = value.Boundary_dimensions_mm__D;
    this.Tt2 = value.Boundary_dimensions_mm__T;
    this.Bt2 = value.Boundary_dimensions_mm__B;
    this.r1t2 = value.Boundary_dimensions_mm__r1_min;
    this.rt2 = value.Boundary_dimensions_mm_r_min;
    this.at2 = value.Load_center_mm_a;
    // this.Db = value.mounting_dimensions_mm__Db_min;

    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da;
    // this.db = value.mounting_dimensions_mm_db_max;
    // this.T = value.boundary_dimensions_mm__T;
    // this.sa = value.mounting_dimensions_mm_sa_min;
    // this.sb = value.mounting_dimensions_mm_sb_min;
    // this.r1 = value.boundary_dimensions_mm_r1_min;

    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.rb = value.mounting_dimensions_mm_rb_min;

    // this.r1 = value.boundary_dimensions_mm_r1_min;
    console.log(this.z);
    console.log(this.r1);
  }
}
