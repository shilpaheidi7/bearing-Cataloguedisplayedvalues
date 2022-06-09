import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavydutytype',
  templateUrl: './heavydutytype.component.html',
  styleUrls: ['./heavydutytype.component.scss'],
})
export class HeavydutytypeComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Fw: number;
  C: number;
  Fwt2: number;
  Dat2: number;
  Dt2: number;
  rt2: number;
  searchText!: string;

  values: any;
  Ct2: number;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    this.B = value.boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.Fw = value.Boundary_dimensions_mm_Fw;
    this.C = value.Boundary_dimensions_mm__C;
    this.Fwt2 = value.Boundary_dimensions_mm_Fw;
    this.Dt2 = value.Boundary_dimensions_mm__D;
    this.rt2 = value.Boundary_dimensions_mm_r_min;
    this.Ct2 = value.Boundary_dimensions_mm__C;
    this.Dat2 = value.Shoulder_dia_Da_0_38;

    console.log(this.z);
  }
}
