import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Withdrawalsleevesspherical',
  templateUrl: './Withdrawalsleevesspherical.component.html',
  styleUrls: ['./Withdrawalsleevesspherical.component.scss'],
})
export class WithdrawalsleevessphericalComponent implements OnInit {
  d1: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  G1: number;
  G: number;
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
    this.d1 = value.Boundary_dimensions_mm_d1;
    this.D = value.boundary_dimensions_mm__D;
    this.B = value.boundary_dimensions_mm__B;
    this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.Da = value.mounting_dimensions_mm_Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.r1 = value.boundary_dimensions_mm_r1_min;
    this.G = value.Boundary_dimensions_mm_G_1_Screw_size;
    this.G1 = value.Boundary_dimensions_mm_G1;
    this.B1 = value.Boundary_dimensions_mm__B1;
    this.B2 = value.Boundary_dimensions_mm__B2;

    console.log(this.z);
  }
}
