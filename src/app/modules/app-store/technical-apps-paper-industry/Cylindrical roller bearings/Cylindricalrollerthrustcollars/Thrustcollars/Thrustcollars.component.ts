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
import { UntilDestroy } from '@ngneat/until-destroy';
@UntilDestroy()
@Component({
  selector: 'app-Thrustcollars',
  templateUrl: './Thrustcollars.component.html',
  styleUrls: ['./Thrustcollars.component.scss'],
})
export class ThrustcollarsComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm_d1',
      header: 'd1',
      cell: (element: any) => `${element.Boundary_dimensions_mm_d1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__B1',
      header: 'B1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__B2',
      header: 'B2',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B2}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r1_min',
      header: ' r1 min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r1_min}`,
    },
    { columnDef: 'Thrust_collar_No', header: '', cell: (element: any) => `${element.Thrust_collar_No}` },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    { columnDef: 'Bearing_No_NJ', header: 'NJ ', cell: (element: any) => `${element.Bearing_No_NJ}` },
    {
      columnDef: 'Applicable_bearing_No_NU',
      header: 'NU',
      cell: (element: any) => `${element.Applicable_bearing_No_NU}`,
    },
    // { columnDef: 'fatigue_load_limit_kN_Cu',   header: 'Cu', cell: (element: any) => `${element.fatigue_load_limit_kN_Cu}`   },
    // { columnDef: 'limiting_speeds_min_1_Grease_lub',   header: 'Grease lub.', cell: (element: any) => `${element.limiting_speeds_min_1_Grease_lub}`   },

    // { columnDef: 'limiting_speeds_min_1_oil_lub',   header: 'Oil lub.', cell: (element: any) => `${element.limiting_speeds_min_1_oil_lub}`   },
    // { columnDef: 'bearing_No_NU',   header: 'NU', cell: (element: any) => `${element.bearing_No_NU}`   },
    // { columnDef: 'bearing_No_NJ',   header: 'NJ', cell: (element: any) => `${element.bearing_No_NJ}`   },
    // { columnDef: 'bearing_No_NUP',   header: 'NUP', cell: (element: any) => `${element.bearing_No_NUP}`   },
    // { columnDef: 'bearing_No_N',   header: 'N', cell: (element: any) => `${element.bearing_No_N}`   },
    //  { columnDef: 'bearing_No_NF',   header: 'NF', cell: (element: any) => `${element.bearing_No_NF}`   },
    //  { columnDef: 'mounting_dimensions_mm_da_min',   header: 'da min', cell: (element: any) => `${element.mounting_dimensions_mm_da_min}`   },
    //  {  columnDef: 'mounting_dimensions_mm_db_min',   header: 'db min', cell: (element: any) => `${element.mounting_dimensions_mm_db_min}`   },
    //  { columnDef: 'mounting_dimensions_mm_db_max',   header: 'db max', cell: (element: any) => `${element.mounting_dimensions_mm_db_max}`   },
    //  { columnDef: 'mounting_dimensions_mm_dc_min',   header: 'dc min', cell: (element: any) => `${element.mounting_dimensions_mm_dc_min}`   },
    //  { columnDef: 'mounting_dimensions_mm_dd_min',   header: 'dd min', cell: (element: any) => `${element.mounting_dimensions_mm_dd_min}`   },
    //  { columnDef: 'mounting_dimensions_mm__Da_max',   header: 'Da max', cell: (element: any) => `${element.mounting_dimensions_mm__Da_max}`   },
    //  { columnDef: 'mounting_dimensions_mm__Db_max',   header: 'Db max', cell: (element: any) => `${element.mounting_dimensions_mm__Db_max}`   },
    //  { columnDef: 'mounting_dimensions_mm__Db_min',   header: 'Db min', cell: (element: any) => `${element.mounting_dimensions_mm__Db_min}`   },
    //  { columnDef: 'mounting_dimensions_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`   },
    //  { columnDef: 'mounting_dimensions_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`   },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm_d1',
  //   'boundary_dimensions_mm__B1',
  //   'boundary_dimensions_mm__B2',
  //   'boundary_dimensions_mm_r1_min',
  //   'thrust_collar_No',
  //   'refer_Mass_kg',
  //   'bearing_No_NJ',
  //   'applicable_bearing_No_NU'

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm_d1',
  // 'boundary_dimensions_mm__B1',
  // 'boundary_dimensions_mm__B2',
  // 'boundary_dimensions_mm_r1_min',
  // 'thrust_collar_No',
  // 'refer_Mass_kg',
  // 'applicable_bearing_No',
  // //"column9": "NU204"

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

  GetThrustcollars() {
    // this.loader.open();
    this.service.GetThrustcollars().subscribe((res) => {
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
    this.GetThrustcollars();
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
