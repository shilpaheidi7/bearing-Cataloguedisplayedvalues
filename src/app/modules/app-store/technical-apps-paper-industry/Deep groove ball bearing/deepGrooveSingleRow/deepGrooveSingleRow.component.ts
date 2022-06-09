import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deepGrooveSingleRow',
  templateUrl: './deepGrooveSingleRow.component.html',
  styleUrls: ['./deepGrooveSingleRow.component.scss'],
})
export class DeepGrooveSingleRowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  rb: number;
  searchText!: string;
  D2: number;
  D1: number;
  r1: number;
  Dt2: number;
  dt2: number;
  Da3: number;
  B1: number;
  Dx: number;
  Cy: number;
  r1min: number;
  a: number;
  b: number;
  r0: number;
  f: number;
  dat2: number;
  Cr: number;
  ra2: number;
  d2: number;
  r2: number;
  B2: number;
  RD: number;
  RS: number;
  r13: number;
  r133: number;
  D23: number;
  N: number;
  NR: number;
  ZZ: number;
  RU: number;
  RD2: number;
  RS2: number;
  ra3: number;

  values: any;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.Dt2 = value.Boundarydimensions_mm__D;
    this.d = value.Boundary_dimensions_mm_d;
    this.dt2 = value.Boundarydimensions_mm_d;

    this.r2 = value.Boundarydimensions_mm_r;
    this.B = value.Boundary_dimensions_mm__B;
    this.B1 = value.Boundarydimensions_mm__B;
    this.B2 = value.Boundarydimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_min;
    this.z = value.Limiting_speeds_min_1_Grease_lub_Z_ZZ_RU_2RU;
    this.RD = value.Limiting_speeds_min_1_Grease_lub_RD_2RD;
    this.RS = value.Limiting_speeds_min_1_Grease_lub_RS_2RS;
    this.D2 = value.dimensions_of_locating_snap_ring_mm__D2;
    this.D = value.Boundary_dimensions_mm__D;
    this.ra2 = value.Mounting_dimensions_mm_ra_max;
    this.Da = value.Mounting_dimensions_mm_Da_max;
    this.da = value.Mounting_dimensions_mm_da_min;
    this.r13 = value.Boundary_dimensions_mm_r1;
    this.r133 = value.Boundary_dimensions_mm_r1_min;
    this.D23 = value.Dimensions_of_locating_snap_ring_mm__D2;
    this.ra3 = value.mounting_dimension_mm_ra_max;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.D1 = value.Dimensions_of_snap_ring_groove_mm__D1_max;
    this.r1 = value.boundary_dimensions_mm_r1;
    this.Da3 = value.Mounting_dimensions_mm__Da_max;
    this.r1min = value.boundary_dimensions_mm_r1_min;
    this.Dx = value.Mounting_dimensions_mm_DX_min;
    this.Cy = value.Mounting_dimensions_mm_CY_max;
    this.rb = value.mounting_dimension_mm_rb_max;
    this.a = value.Dimensions_of_snap_ring_groove_mm_a_max;
    this.b = value.Dimensions_of_snap_ring_groove_mm_b_0_15;
    this.r0 = value.Dimensions_of_snap_ring_groove_mm_r_max;
    this.f = value.Dimensions_of_locating_snap_ring_mm_f_0_05;
    this.dat2 = value.Mounting_dimensions_mm__da_max;
    this.Cr = value.Basic_load_ratings_kN_Cr;
    this.N = value.Bearing_No_With_snap_ring_groove;
    this.NR = value.Bearing_No_With_locating_snap_ring;
    this.ZZ = value.Bearing_No_Shielded;
    this.RU = value.Bearing_No_Non_contact_sealed;
    this.RD2 = value.Bearing_No_Extremely_light_sealed;
    this.RS2 = value.Bearing_No_Contact_sealed;

    console.log(this.z);
    console.log(this.dt2);
    console.log(this.ra3);
  }
}
