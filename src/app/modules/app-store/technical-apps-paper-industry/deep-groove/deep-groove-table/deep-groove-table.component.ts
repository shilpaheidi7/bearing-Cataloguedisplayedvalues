import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BearingCatalogueService } from 'src/app/shared/services/api/bearingCatalogue.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader-service/app-loader.service';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-deep-groove-table',
  templateUrl: './deep-groove-table.component.html',
  styleUrls: ['./deep-groove-table.component.scss'],
})
export class DeepGrooveTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginatorElement', { read: ElementRef })
  paginatorHtmlElement!: ElementRef;

  @Output() bearingValue = new EventEmitter<string>();

  filterTerm!: string;
  selectedIndex: any;

  shaftFilter = new FormControl();
  bearingFilter = new FormControl();

  filteredValues = { boundary_dimensions_mm_d: '', bearing_No: '' };
  ELEMENT_DATA: any[] = [];

  displayedColumns: string[] = [
    'boundary_dimensions_mm_d',
    'boundary_dimensions_mm__D',
    'boundary_dimensions_mm__B',
    'boundary_dimensions_mm_r_min',
    'basic_load_ratings_kN_Cr',
    'basic_load_ratings_kN_C0r',
    'basic_load_limits_kN_Cu',
    'factor_f0',
    'limiting_speeds_min_1_Grease_lub',
    'limiting_speeds_min_1_Oil_lub',
    'bearing_No',
    'mounting_dimensions_mm_da_min',
    'mounting_dimensions_mm__Da_max',
    'mounting_dimensions_mm_ra_max',
    'refer_Mass_kg',
  ];

  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  table_data!: any;

  constructor(
    private service: BearingCatalogueService,
    private loader: AppLoaderService,
    private snackbar: MatSnackBar
  ) {}

  GetDoublerowdeepgroove() {
    this.loader.open();
    this.service.GetDoublerowdeepgroove().subscribe((res) => {
     this.loader.close();
      console.log(res);
     this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
    });
  }

  ngOnInit() {
   this.GetDoublerowdeepgroove();

    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Entries Per Page';

    this.shaftFilter.valueChanges.subscribe((shaftFilterValue) => {
      this.filteredValues['boundary_dimensions_mm_d'] = shaftFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.bearingFilter.valueChanges.subscribe((bearingFilterValue) => {
      this.filteredValues['bearing_No'] = bearingFilterValue;
      this.dataSource.filter = JSON.stringify(this.filteredValues);
    });

    this.dataSource.filterPredicate = this.customFilterPredicate();
  }
  color: boolean = true;

  customFilterPredicate() {
    const myFilterPredicate = function (data: Data, filter: string): boolean {
      let searchString = JSON.parse(filter);
      // let nameFound = data.name.toString().trim().toLowerCase().indexOf(searchString.name.toLowerCase()) !== -1
      let shaftFound =
        data.boundary_dimensions_mm_d.toString().trim().indexOf(searchString.boundary_dimensions_mm_d) !== -1;
      let bearingFound = data.bearing_No.toString().trim().indexOf(searchString.bearing_No) !== -1;
      if (searchString.topFilter) {
        return shaftFound || bearingFound;
      } else {
        return shaftFound && bearingFound;
      }
    };
    return myFilterPredicate;
  }
  // console.log('row clicked ' + JSON.stringify(row));
  // const index = this.dataSource.data.indexOf(row);
  // console.log(' Index ' + index);

  // console.log(row);
  // highlight(row: any) {
  //   this.selectedIndex = row.key;
  // }

  // end

  onRowClicked(row: any) {
    this.bearingValue.emit(row);
  }

  highlight(row: any) {
    row.highlighted = !row.highlighted;
    // this.selection.toggle(row);
    this.selection.select(row);
  }

  // highlight(row: any) {
  //   this.selectedRowIndex = row.position;
  // }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  filterValue = '';
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    this.filterValue = this.filterValue.trim(); // Remove whitespace
    this.filterValue = this.filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = this.filterValue;
  }

  //  Whether the number of selected elements matches the total number of rows.
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }

  // Selects all rows if they are not all selected; otherwise clear selection.
  // masterToggle() {
  //   this.isAllSelected()
  //     ? this.selection.clear()
  //     : this.dataSource.data.forEach((row) => this.selection.select(row));
  // }
  // logSelection() {
  //   this.selection.selected.forEach((s) => console.log(s.D));
  // }
}

export interface Data {
  boundary_dimensions_mm_d: number | string;
  boundary_dimensions_mm__D: number | string;
  boundary_dimensions_mm__B: number | string;
  boundary_dimensions_mm_r_min: number | string;
  basic_load_ratings_kN_Cr: number | string;
  basic_load_ratings_kN_C0r: number | string;
  basic_load_limits_kN_Cu: number | string;
  factor_f0: number | string;
  limiting_speeds_min_1_Grease_lub: number | string;
  limiting_speeds_min_1_Oil_lub: number | string;
  bearing_No: number | string;
  mounting_dimensions_mm_da_min: number | string;
  mounting_dimensions_mm__Da_max: number | string;
  mounting_dimensions_mm_ra_max: number | string;
  refer_Mass_kg: number | string;
}
