import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BearingCatalogueService } from 'src/app/shared/services/api/bearingCatalogue.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader-service/app-loader.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-tapereddoublerow',
  templateUrl: './tapereddoublerow.component.html',
  styleUrls: ['./tapereddoublerow.component.scss'],
})
export class TapereddoublerowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  r1: number;
  T: Number;
  C: number;
  sa: number;
  rb: number;
  dat2: number;
  sat2: number;
  dt2: number;
  Dt2: number;
  Bt2: number;
  Tt2: number;
  rt2: number;
  r1t2: number;
  Dat2: number;
  rat2: number;
  rbt2: number;
  searchText!: string;

  values: any;

  constructor() {}

  ngOnInit() {}
  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.Boundary_dimensions_mm_d;
    this.D = value.Boundary_dimensions_mm__D;
    this.B = value.boundary_dimensions_mm__B;
    this.r = value.Boundary_dimensions_mm_r_min;
    this.z = value.limiting_speeds_min_1_Oil_lub;
    // this.Da = value.mounting_dimensions_mm__Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    // this.ra = value.mounting_dimensions_mm_ra_max;
    // this.Da = value.mounting_dimensions_mm_Da_max;
    // this.da = value.mounting_dimensions_mm_da_min;
    this.dt2 = value.Boundary_dimensions_mm_d;
    this.Dt2 = value.Boundary_dimensions_mm__D;
    this.Bt2 = value.Boundary_dimensions_mm__B;
    this.Tt2 = value.Boundary_dimensions_mm__T;
    this.rt2 = value.Boundary_dimensions_mm_r_min;
    this.r1t2 = value.Boundary_dimensions_mm_r1_min;
    this.r1 = value.Boundary_dimensions_mm_r1_min;
    this.T = value.Boundary_dimensions_mm__T;
    this.C = value.Boundary_dimensions_mm__C;
    this.da = value.Boundary_dimensions_mm_da_min;
    this.Da = value.Boundary_dimensions_mm__Da_min;
    this.sa = value.Boundary_dimensions_mm_sa_min;
    this.ra = value.Boundary_dimensions_mm_ra_max;
    this.rb = value.Boundary_dimensions_mm_rb_max;
    // this.dat2 = value.boundary_dimensions_mm_da_max;
    this.sat2 = value.Boundary_dimensions_mm_sa_min;
    this.dt2 = value.Boundary_dimensions_mm_d;
    this.dat2 = value.Boundary_dimensions_mm_da_max;
    this.Dat2 = value.Boundary_dimensions_mm__Da_max;
    this.rat2 = value.Boundary_dimensions_mm_ra_max;
    this.rbt2 = value.Boundary_dimensions_mm_rb_max;

    console.log(this.z);
  }
}
