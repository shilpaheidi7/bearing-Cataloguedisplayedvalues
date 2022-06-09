import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Cylindricalrollerthrustcollars',
  templateUrl: './Cylindricalrollerthrustcollars.component.html',
  styleUrls: ['./Cylindricalrollerthrustcollars.component.scss'],
})
export class CylindricalrollerthrustcollarsComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  d1: number;
  r1: number;
  B1: number;
  B2: number;
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
    this.r = value.boundary_dimensions_mm__r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.d1 = value.Boundary_dimensions_mm_d1;
    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.B1 = value.Boundary_dimensions_mm__B1;
    this.B2 = value.Boundary_dimensions_mm__B2;

    console.log(this.z);
  }
}
