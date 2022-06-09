import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extraSmallMiniatureBallBearings',
  templateUrl: './extraSmallMiniatureBallBearings.component.html',
  styleUrls: ['./extraSmallMiniatureBallBearings.component.scss'],
})
export class ExtraSmallMiniatureBallBearingsComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  da1: number;
  ra: number;
  da2: number;
  r1: number;
  B1: number;
  rt2: Number;
  c1: number;
  Bt2: number;
  C2: number;
  D2: number;
  dat2: number;
  rat2: number;
  D1t2: number;
  D2t2: number;
  ZRU: number;
  ZRD: number;
  ZRS: number;
  B12: number;
  r12: number;
  r2: number;
  B2: number;
  d2: number;
  Dt2: number;
  open: number;
  shielded: number;
  noncontact: number;
  extremelylight: number;
  contactsealed: number;
  open2: number;
  shielded2: number;
  ZZX: number;

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
    this.r = value.boundary_dimensions_mm_r_min;
    this.r1 = value.boundary_dimensions_mm_r1_min;
    this.ZRU = value.Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_ZZ_2RU;
    this.ZRD = value.Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_2RD;
    this.ZRS = value.Limiting_speeds_min_1Grease_lub_Facto_Oil_lub_2RS;
    //this.r = value.boundary_dimensions_mm_min;
    //this.r = value.boundary_dimensions_mm_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    this.Da = value.Mounting_dimensions_mm_Da_max;
    this.da = value.Mounting_dimensions_mm_d_a_min;
    this.da1 = value.dimensions_of_flange_mm_da;
    this.da2 = value.dimensions_of_flange_mm_da;
    // this.da = value.mounting_dimensions_mm_d_a_min;
    this.d2 = value.Boundary_dimensions_mm_d;
    this.D2 = value.Boundary_dimensions_mm__D;
    this.B2 = value.Boundary_dimensions_mm__B;
    this.r2 = value.Boundary_dimensions_mm_r_min;
    this.r12 = value.Boundary_dimensions_mm_r_1min;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    this.B12 = value.Boundary_dimensions_mm__B1;
    this.rt2 = value.boundary_dimensions_mm_r_min;
    this.c1 = value.Dimensions_of_flange_mm__C1;
    this.Bt2 = value.boundary_dimensions_mm__B1;
    this.C2 = value.Dimensions_of_flange_mm_c2;
    this.Dt2 = value.Dimensions_of_flange_mm__D2;
    this.dat2 = value.dimensions_of_flange_mm_da_min;
    this.rat2 = value.Mounting_dimensions_mm_ra_max;
    this.D1t2 = value.Dimensions_of_flange_mm__D1;
    this.open = value.Bearing_No_open;
    this.shielded = value.Bearing_No_Shileded;
    this.noncontact = value.Bearing_No_Non_contact_sealed;
    this.extremelylight = value.Bearing_No_Extremely_light_shielded;
    this.contactsealed = value.Bearing_No_contact_sealed;
    this.open2 = value.Bearing_No_Open;
    this.shielded2 = value.Bearing_No_Shielded;
    this.ZZX = value.Limiting_speeds_min_1_Grease_lub_Oil_lub_Open_ZZ_ZZX;
    this.B1 = value.Boundary_dimensions_mm__B1;
    console.log(this.z);
    console.log(this.shielded);
  }
}
