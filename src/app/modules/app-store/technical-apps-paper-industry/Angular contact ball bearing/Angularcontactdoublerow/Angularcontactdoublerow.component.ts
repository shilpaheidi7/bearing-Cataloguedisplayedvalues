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
  selector: 'app-Angularcontactdoublerow',
  templateUrl: './Angularcontactdoublerow.component.html',
  styleUrls: ['./Angularcontactdoublerow.component.scss'],
})
export class AngularcontactdoublerowComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;
  z: number;
  Da: number;
  da: number;
  ra: number;
  a: number;
  zz: number;
  Rs: number;
  sealed: number;
  shielded: number;
  open: number;
  openz: number;
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
    this.z = value.Limiting_speeds_Oil_lub_Open_Z;
    this.Da = value.Mounting_dimensions_mm__Da_max;
    this.da = value.Mounting_dimensions_mm_da_min;
    this.ra = value.Mounting_dimensions_mm_ra_max;
    // this.z = value.limiting_speeds_Oil_lub_Open_Z;
    this.a = value.Load_center_spread_mm_Open_a;
    this.zz = value.Limiting_speeds_Grease_lub_Open_Z_ZZ;
    this.Rs = value.Limiting_speeds_Grease_lub_Open_Rs_2RS;
    this.open = value.Bearing_No_Open;
    this.shielded = value.Bearing_No_Shielded;
    this.sealed = value.Bearing_No_Sealed;
    this.openz = value.Limiting_speeds_Oil_lub_Open_Z;

    console.log(this.z);
  }
}
