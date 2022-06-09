import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Adapterassembliesshperical',
  templateUrl: './Adapterassembliesshperical.component.html',
  styleUrls: ['./Adapterassembliesshperical.component.scss'],
})
export class AdapterassembliesshpericalComponent implements OnInit {
  d2: number;
  D: number;
  B2: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  r1: number;
  d1: number;
  A: number;
  B1: number;
  de: number;
  K: number;
  b: number;
  B3: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d2 = value.Boundarydimensions_mm_d2;
    this.D = value.boundary_dimensions_mm__D;
    this.B2 = value.Boundarydimensions_mm_B2;
    this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    this.Da = value.mounting_dimensions_mm_Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.mounting_dimensions_mm_ra_max;
    this.r1 = value.boundary_dimensions_mm_r1_min;
    this.B1 = value.Boundarydimensions_mm_B1;
    this.d1 = value.Boundarydimensions_mm_d1;
    this.A = value.Mounting_dimensions_mm_A_min;
    this.de = value.Mounting_dimensions_mm_de_min;

    this.b = value.Mounting_dimensions_mm_min;
    this.K = value.Mounting_dimensions_mm_K_min;

    this.B3 = value.Boundarydimensions_mm_B3;

    console.log(this.z);
  }
}
