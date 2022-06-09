import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cylindricalrollerdoublerow',
  templateUrl: './Cylindricalrollerdoublerow.component.html',
  styleUrls: ['./Cylindricalrollerdoublerow.component.scss'],
})
export class CylindricalrollerdoublerowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Ew: number;
  Fw: number;
  db: number;
  dat1: number;
  Dat1: number;
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
    this.ra = value.Mounting_dimensions_mm__ra_min;
    this.Ew = value.Boundary_dimensions_mm_Ew;
    // this.B = value.boundary_dimensions_mm__B;
    this.Fw = value.Boundary_dimensions_mm_Fw;
    this.db = value.Mounting_dimensions_mm_db_max;
    this.da = value.Mounting_dimensions_mm_da_max;
    this.Da = value.Mounting_dimensions_mm__Da_max;

    console.log(this.z);
    console.log(this.Ew);
  }
}
