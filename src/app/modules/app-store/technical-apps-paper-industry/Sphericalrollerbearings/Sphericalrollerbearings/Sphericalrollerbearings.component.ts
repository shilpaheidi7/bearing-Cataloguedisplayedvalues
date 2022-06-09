import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Sphericalrollerbearings',
  templateUrl: './Sphericalrollerbearings.component.html',
  styleUrls: ['./Sphericalrollerbearings.component.scss'],
})
export class SphericalrollerbearingsComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  r1: number;
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
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_max;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.r1 = value.boundary_dimensions_mm_r1_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.dat1 = value.mounting_dimensions_mm_da_min;

    this.Dat1 = value.mounting_dimensions_mm__Da_min;

    console.log(this.z);
    console.log(this.da);
  }
}
