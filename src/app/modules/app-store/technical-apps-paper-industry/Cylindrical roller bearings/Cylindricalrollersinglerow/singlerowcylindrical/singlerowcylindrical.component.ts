import { SelectionModel } from '@angular/cdk/collections';
import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter, destroyPlatform } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BearingCatalogueService } from 'src/app/shared/services/api/bearingCatalogue.service';
import { AppLoaderService } from 'src/app/shared/services/app-loader-service/app-loader.service';
import { Data } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-singlerowcylindrical',
  templateUrl: './singlerowcylindrical.component.html',
  styleUrls: ['./singlerowcylindrical.component.scss'],
})
export class SinglerowcylindricalComponent implements OnInit {
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

  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_d',
      header: 'd',
      cell: (element: any) => `${element.Boundary_dimensions_mm_d}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__D',
      header: 'D',
      cell: (element: any) => `${element.Boundary_dimensions_mm__D}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__B',
      header: 'B',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B}`,
    },
    {
      columnDef: 'boundary_dimensions_mm__r_min',
      header: 'r min',
      cell: (element: any) => `${element.boundary_dimensions_mm__r_min}`,
    },
    {
      columnDef: 'boundary_dimensions_mm__r1_min',
      header: ' r1 min',
      cell: (element: any) => `${element.boundary_dimensions_mm__r1_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Fw',
      header: 'Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Ew',
      header: 'Ew',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Ew}`,
    },
    {
      columnDef: 'basic_load_ratings_kN_Cr',
      header: 'Cr ',
      cell: (element: any) => `${element.basic_load_ratings_kN_Cr}`,
    },
    {
      columnDef: 'basic_load_ratings_kN_C0r',
      header: 'C0r',
      cell: (element: any) => `${element.basic_load_ratings_kN_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_limit_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_limit_kN_Cu}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub',
      header: 'Grease lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub}`,
    },

    {
      columnDef: 'Limiting_speeds_min_1_oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_oil_lub}`,
    },
    { columnDef: 'Bearing_No_NU', header: 'NU', cell: (element: any) => `${element.Bearing_No_NU}` },
    { columnDef: 'Bearing_No_NJ', header: 'NJ', cell: (element: any) => `${element.Bearing_No_NJ}` },
    { columnDef: 'Bearing_No_NUP', header: 'NUP', cell: (element: any) => `${element.Bearing_No_NUP}` },
    { columnDef: 'Bearing_No_N', header: 'N', cell: (element: any) => `${element.Bearing_No_N}` },
    { columnDef: 'Bearing_No_NF', header: 'NF', cell: (element: any) => `${element.Bearing_No_NF}` },
    {
      columnDef: 'mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.mounting_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_db_min',
      header: 'db min',
      cell: (element: any) => `${element.mounting_dimensions_mm_db_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_db_max',
      header: 'db max',
      cell: (element: any) => `${element.mounting_dimensions_mm_db_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_dc_min',
      header: 'dc min',
      cell: (element: any) => `${element.mounting_dimensions_mm_dc_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_dd_min',
      header: 'dd min',
      cell: (element: any) => `${element.mounting_dimensions_mm_dd_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Db_max',
      header: 'Db max',
      cell: (element: any) => `${element.mounting_dimensions_mm__Db_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Db_min',
      header: 'Db min',
      cell: (element: any) => `${element.mounting_dimensions_mm__Db_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_rb_max',
      header: 'rb max',
      cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`,
    },
    { columnDef: ' Refer_Mass_NU_N_kg ', header: '', cell: (element: any) => `${element.Refer_Mass_NU_N_kg} ` },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm__r_min',
  //   'boundary_dimensions_mm__r1_min',
  //   'boundary_dimensions_mm__Fw',
  //   'boundary_dimensions_mm__Ew',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'fatigue_load_limit_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_oil_lub',
  //   'bearing_No_NU',
  //   'bearing_No_NJ',
  //   'bearing_No_NUP',
  //   'bearing_No_N',
  //   'bearing_No_NF',
  //   'mounting_dimensions_mm_da_min',
  //   'mounting_dimensions_mm_db_min',
  //   'mounting_dimensions_mm_db_max',
  //   'mounting_dimensions_mm_dc_min',
  //   'mounting_dimensions_mm_dd_min',
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm__Db_max',
  //   'mounting_dimensions_mm__Db_min',
  //   'mounting_dimensions_mm_ra_max',
  //   'mounting_dimensions_mm_rb_max',
  //   'refer_Mass_NU_N_kg'

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm__r_min',
  //   'boundary_dimensions_mm__r1_min',
  //   'boundary_dimensions_mm__Fw',
  //   'boundary_dimensions_mm__Ew',
  //   'basic_load_ratings_kN_Cr_C0r',
  //  // "column9": "12.7",
  //   'fatigue_load_limit_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_oil_lub',
  //   'bearing_No_NU',
  //   'nj',
  //   'bearing_No_NUP',
  //   'bearing_No_N',
  //   'bearing_No_NF',
  //   'mounting_dimensions_mm_da_min',
  //   'mounting_dimensions_mm_min_db_max',
  //   //"column20": "?",
  //   'mounting_dimensions_mm_dc_min',
  //   'mounting_dimensions_mm_dd_min',
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm_max_Db_min',
  //   //"column25": "42",
  //   'mounting_dimensions_mm_ra_max',
  //   'mounting_dimensions_mm_rb_max',
  //   'refer_Mass_NU_N_kg'
  //

  // ];

  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  table_data!: any;

  constructor(
    private service: BearingCatalogueService,
    private loader: AppLoaderService,
    private snackbar: MatSnackBar
  ) {}

  GetSinglerowcylindrical() {
    // this.loader.open();
    this.service.GetSinglerowcylindrical().subscribe((res) => {
      //  this.loader.close();
      console.log(res);
      this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
      // this.loader.close();
    });
  }

  ngOnInit() {
    this.GetSinglerowcylindrical();
    //this.loader.open();

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
        data['boundary_dimensions_mm_d'].toString().trim().indexOf(searchString.boundary_dimensions_mm_d) !== -1;
      let bearingFound = data['bearing_No'].toString().trim().indexOf(searchString.bearing_No) !== -1;
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
}
