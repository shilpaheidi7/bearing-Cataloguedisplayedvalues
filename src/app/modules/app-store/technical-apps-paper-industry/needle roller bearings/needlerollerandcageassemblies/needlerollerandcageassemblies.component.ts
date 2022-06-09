import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-needlerollerandcageassemblies',
  templateUrl: './needlerollerandcageassemblies.component.html',
  styleUrls: ['./needlerollerandcageassemblies.component.scss'],
})
export class NeedlerollerandcageassembliesComponent implements OnInit {
  d: number;
  D: number;
  Bc: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  Fwt2: number;
  Bct2: number;
  Fw: number;
  Ew: number;
  Ewt2: number;
  S: number;
  H: number;
  h5: number;
  G6: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.Bct2 = value.Boundary_dimensions_mm_Bc;
    this.Ewt2 = value.Boundary_dimensions_mm_Ew;
    this.D = value.boundary_dimensions_mm__D;
    // this.B = value.boundary_dimensions_mm__B;
    this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.Fwt2 = value.Boundary_dimensions_mm_Fw;
    this.h5 = value.Recommended_dimensions_mm_Shaft_dia_h5_max;
    this.G6 = value.Recommended_dimensions_mm_S_Housing_bore_dia_G6_max;

    this.Fw = value.Boundary_dimensions_mm_Fw;
    this.Ew = value.Boundary_dimensions_mm_Ew;
    this.Bc = value.Boundary_dimensions_mm_Bc_0_20_0_55;
    this.S = value.Recommended_dimensions_S_max;
    this.H = value.Recommended_dimensions_H_max;

    console.log(this.z);
  }
}
