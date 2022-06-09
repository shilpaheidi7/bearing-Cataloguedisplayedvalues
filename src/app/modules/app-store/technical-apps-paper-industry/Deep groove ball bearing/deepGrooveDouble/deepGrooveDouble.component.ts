import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deepGrooveDouble',
  templateUrl: './deepGrooveDouble.component.html',
  styleUrls: ['./deepGrooveDouble.component.scss'],
})
export class DeepGrooveDoubleComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Dt2: number;
  dt2: number;
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
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.Mounting_dimensions_mm__Da_max;
    this.da = value.Mounting_dimensions_mm_da_min;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.Dt2 = value.boundarydimensions_mm__D;
    this.dt2 = value.boundarydimensions_mm_d;
    console.log(this.z);
  }
}
