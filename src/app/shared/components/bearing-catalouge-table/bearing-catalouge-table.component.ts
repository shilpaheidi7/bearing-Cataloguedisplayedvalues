import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-bearing-catalouge-table',
  templateUrl: './bearing-catalouge-table.component.html',
  styleUrls: ['./bearing-catalouge-table.component.scss'],
})
export class BearingCatalougeTableComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('paginatorElement', { read: ElementRef })
  paginatorHtmlElement!: ElementRef;

  @Output() bearingValue = new EventEmitter<string>();

  filterTerm!: string;
  selectedIndex: any;

  shaftFilter = new FormControl();
  bearingFilter = new FormControl();

  filteredValues = { d: '', bearing_No: '' };

  displayedColumns: string[] = [
    'd',
    'D',
    'B',
    'r_min',
    'cr',
    'cor',
    'cu',
    'fo',
    'grease_Lub',
    'oil_Lub',
    'bearing_No',
    'da_min',
    'da_max',
    'ra_max',
    'mass_kg',
  ];

  dataSource = new MatTableDataSource<Data>(ELEMENT_DATA);
  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  constructor() {
    // this.paginator =  MatPaginator;
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Entries Per Page';

    this.shaftFilter.valueChanges.subscribe((shaftFilterValue) => {
      this.filteredValues['d'] = shaftFilterValue;
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
      let shaftFound = data.d.toString().trim().indexOf(searchString.d) !== -1;
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

const ELEMENT_DATA: Data[] = [
  {
    d: 10,
    D: 15,
    B: 3,
    r_min: 0.1,
    cr: 1.05,
    cor: 0.43,
    cu: 0.02,
    fo: 15.7,
    grease_Lub: 39000,
    oil_Lub: 47000,
    bearing_No: 6700,
    da_min: 10.8,
    da_max: 14.2,
    ra_max: 0.1,
    mass_kg: 0.02,
  },
  {
    d: 10,
    D: 19,
    B: 5,
    r_min: 0.3,
    cr: 2.15,
    cor: 0.84,
    cu: 0.03,
    fo: 14.8,
    grease_Lub: 37000,
    oil_Lub: 43000,
    bearing_No: 6800,
    da_min: 12,
    da_max: 17,
    ra_max: 0.3,
    mass_kg: 0.03,
  },
  {
    d: 10,
    D: 22,
    B: 6,
    r_min: 0.3,
    cr: 3.35,
    cor: 1.25,
    cu: 0.07,
    fo: 14.0,
    grease_Lub: 34000,
    oil_Lub: 41000,
    bearing_No: 6900,
    da_min: 12,
    da_max: 20,
    ra_max: 0.3,
    mass_kg: 0.07,
  },
  {
    d: 10,
    D: 26,
    B: 8,
    r_min: 0.3,
    cr: 5.7,
    cor: 1.95,
    cu: 0.1,
    fo: 12.3,
    grease_Lub: 31000,
    oil_Lub: 36000,
    bearing_No: 6000,
    da_min: 12,
    da_max: 24,
    ra_max: 0.3,
    mass_kg: 0.1,
  },
  {
    d: 12,
    D: 18,
    B: 4,
    r_min: 0.2,
    cr: 1.15,
    cor: 0.53,
    cu: 0.023,
    fo: 16.3,
    grease_Lub: 34000,
    oil_Lub: 41000,
    bearing_No: 6701,
    da_min: 13.6,
    da_max: 16.4,
    ra_max: 0.2,
    mass_kg: 0.023,
  },
];

export interface Data {
  d: number | string;
  D: number | string;
  B: number | string;
  r_min: number | string;
  cr: number | string;
  cor: number | string;
  cu: number | string;
  fo: number | string;
  grease_Lub: number | string;
  oil_Lub: number | string;
  bearing_No: number | string;
  da_min: number | string;
  da_max: number | string;
  ra_max: number | string;
  mass_kg: number | string;
}
