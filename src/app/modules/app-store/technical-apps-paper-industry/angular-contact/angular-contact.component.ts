import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BearingCatalogueService } from 'src/app/shared/services/api/bearingCatalogue.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader-service/app-loader.service';

@Component({
  selector: 'app-angular-contact',
  templateUrl: './angular-contact.component.html',
  styleUrls: ['./angular-contact.component.scss'],
})
export class AngularContactComponent implements OnInit {
  d: number;
  D: number;
  B: number;
  r: number;

  searchText!: string;

  values: any;

  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  receivedValue(value: any) {
    this.values = value;
    console.log(value);
    this.d = value.d;
    this.D = value.D;
    this.B = value.B;
    this.r = value.r_min;
  }
}
