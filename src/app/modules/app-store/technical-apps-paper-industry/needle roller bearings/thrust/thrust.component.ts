import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thrust',
  templateUrl: './thrust.component.html',
  styleUrls: ['./thrust.component.scss'],
})
export class ThrustComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  Dc1: number;
  Dc: number;
  Dw: number;
  Ea: number;
  Eb: number;
  Dc1t2: number;
  Dct2: number;
  Dwt2: number;
  T: number;
  Ebt2: number;
  Eat2: number;
  rat2: number;
  dt2: number;
  D1t2: number;
  rt2: number;
  Dct3: number;
  Dc1t3: number;
  Dwt3: number;
  Eat3: number;
  Ebt3: number;
  dt3: number;
  d1t3: number;
  d1: number;
  H: number;
  h: number;
  s: number;
  D1: number;
  h1: number;
  a: number;
  Dt2: number;
  ht2: number;
  Ht3: number;
  St3: number;
  ht3: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Washer_dimensions_mm_d__D;
    this.D = value.Washer_dimensions_mm_d_d1;
    this.D1 = value.Washer_dimensions_mm_d__D1;
    this.B = value.boundary_dimensions_mm__B;
    this.r = value.boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    this.Da = value.mounting_dimensions_mm__Da_max;
    this.da = value.mounting_dimensions_mm_da_min;
    this.ra = value.Boundary_dimensions_mm__ra_max;
    this.Dc1 = value.Boundary_dimensions_mm__Dc1;
    this.Dc = value.Boundary_dimensions_mm__Dc;
    this.Dw = value.Boundary_dimensions_mm__Dw;
    // this.ra = value.boundary_dimensions_mm__ra_max;
    this.Ea = value.Boundary_dimensions_mm__Ea;
    this.Eb = value.Boundary_dimensions_mm__Eb;
    this.Dc1t2 = value.Boundary_dimensions_mm__Dc1;
    this.Dct2 = value.Boundary_dimensions_mm__Dc;
    this.Dwt2 = value.Boundary_dimensions_mm__sDw;
    this.T = value.Boundary_dimensions_mm__T;
    this.Ebt2 = value.Boundary_dimensions_mm__Eb_min;

    this.Eat2 = value.Boundary_dimensions_mm__Ea_min;
    this.rat2 = value.Boundary_dimensions_mm__ra_max;
    this.dt2 = value.Washer_dimensions_mm_d;
    this.D1t2 = value.Washer_dimensions_mm__D1;
    this.rt2 = value.Washer_dimensions_mm_r_min;
    this.Dt2 = value.Washer_dimensions_mm__D_d1;
    this.ht2 = value.washer_dimensions_mm_h_max;
    this.Dct3 = value.Boundary_dimensions_mm__Dc;
    this.Dc1t3 = value.Boundary_dimensions_mm__Dc1;
    this.Dwt3 = value.Boundary_dimensions_mm__Dw;
    this.Eat3 = value.Boundary_dimensions_mm__Ea;
    this.Ebt3 = value.Boundary_dimensions_mm__Eb;

    this.dt3 = value.Washer_dimensions_mm_d;

    this.d1t3 = value.Washer_dimensions_mm_d1;
    this.ht3 = value.Washer_dimensions_mm_h_max;
    this.St3 = value.Piloting_dimensions_mm_S_max;
    this.Ht3 = value.Dia_to_clear_O_D_mm_H_2;
    this.d1 = value.washer_dimensions_mm__D_d1;
    this.H = value.dia_to_clear_O_D_mm_H_2;
    this.h = value.heavy_LS_h11_mm;
    this.a = value.heavy_LS_a_mm;
    this.s = value.piloting_dimensions_mm_S_min;
    this.h1 = value.Thin_h1_mm;
    console.log(this.z);
  }
}
