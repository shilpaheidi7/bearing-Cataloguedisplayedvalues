import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Self-aligningadapterassemblies',
  templateUrl: './Self-aligningadapterassemblies.component.html',
  styleUrls: ['./Self-aligningadapterassemblies.component.scss'],
})
export class SelfAligningadapterassembliesComponent implements OnInit {
  d1: number;
  d2: number;
  B2: number;
  r: number;
  B1: number;
  Da: number;
  da: number;
  ra: number;
  A: number;
  de: number;
  b: number;
  K: number;
  searchText!: string;

  values: any;
  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d1 = value.Boundary_dimensions_mm_d1;
    this.d2 = value.Boundary_dimensions_mm_d2;
    this.B2 = value.Boundary_dimensions_mm__B2;
    this.r = value.boundary_dimensions_mm_r_min;
    this.B1 = value.Boundary_dimensions_mm__B1;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.Mounting_dimensions_mm_da_min;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.A = value.mounting_dimensions_mm_A_min;
    this.de = value.mounting_dimensions_mm_de_min;
    this.K = value.mounting_dimensions_mm_K_min;
    this.b = value.mounting_dimensions_b_min;

    // console.log(this.z);
  }
}
