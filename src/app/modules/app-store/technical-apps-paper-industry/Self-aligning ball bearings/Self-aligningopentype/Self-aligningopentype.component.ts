import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Self-aligningopentype',
  templateUrl: './Self-aligningopentype.component.html',
  styleUrls: ['./Self-aligningopentype.component.scss'],
})
export class SelfAligningopentypeComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
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
    console.log(this.z);
  }
}
