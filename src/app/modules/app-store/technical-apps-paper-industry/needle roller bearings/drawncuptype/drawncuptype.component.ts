import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawncuptype',
  templateUrl: './drawncuptype.component.html',
  styleUrls: ['./drawncuptype.component.scss'],
})
export class DrawncuptypeComponent implements OnInit {
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
  C3: number;
  Fwt2: number;
  Ct2: number;
  Y: number;
  Dt2: number;
  searchText!: string;

  values: any;

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
    this.C = value.Boundary_dimensions_mm_C;
    this.Fw = value.Boundary_dimensions_mm_Fw;
    this.C3 = value.Boundary_dimensions_mm_C3_min;
    this.Fwt2 = value.Boundary_dimensions_mm_Fw;
    this.Dt2 = value.Boundary_dimensions_mm__D;

    this.Ct2 = value.Boundary_dimensions_mm_C;
    this.Y = value.Boundary_dimensions_mm_Y_max;

    console.log(this.z);
  }
}
