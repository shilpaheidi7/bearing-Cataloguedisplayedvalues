import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-combined',
  templateUrl: './combined.component.html',
  styleUrls: ['./combined.component.scss'],
})
export class CombinedComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Fw: number;
  Dw: number;
  C: number;
  C1: number;
  C2: number;
  Fwt2: number;
  Ct2: number;
  C1t2: number;
  C2t2: number;
  dwt2: number;
  Dat2: number;
  Dt2: number;
  rt2: number;
  RAXR: number;
  NAXR: number;
  NAXRZ: number;

  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.boundary_dimensions_mm_d;
    this.D = value.boundary_dimensions_mm__D;
    this.B = value.boundary_dimensions_mm__B;
    // this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.Boundary_dimensions_mm__Da;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.D = value.Boundary_dimensions_mm__D;
    this.Dw = value.Boundary_dimensions_mm_dw_E7;

    this.C = value.Boundary_dimensions_mm__C;
    this.C1 = value.Boundary_dimensions_mm__C1;
    this.C2 = value.Boundary_dimensions_mm__C2;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.Fwt2 = value.Boundary_dimensions_mm__Fw;
    this.Dt2 = value.Boundary_dimensions_mm__D;
    this.rt2 = value.Boundary_dimensions_mm_r_min;
    this.RAXR = value.Bearing_No_RAXR;
    this.NAXR = value.bearing_No_NAXR;
    this.NAXRZ = value.bearing_No_NAXR_Z;
    this.Fw = value.Boundary_dimensions_mm__Fw;
    this.Ct2 = value.Boundary_dimensions_mm__C;
    this.C1t2 = value.Boundary_dimensions_mm__C1;
    this.C2t2 = value.Boundary_dimensions_mm__C2;

    this.dwt2 = value.Boundary_dimensions_mm_dw_E7;
    this.Dat2 = value.Boundary_dimensions_mm__Da;

    // this.Fw = value.boundary_dimensions_mm__Fw;

    console.log(this.z);
  }
}
