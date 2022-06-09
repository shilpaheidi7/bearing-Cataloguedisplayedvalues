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
  selector: 'app-combinedmetricseries2',
  templateUrl: './combinedmetricseries2.component.html',
  styleUrls: ['./combinedmetricseries2.component.scss'],
})
export class Combinedmetricseries2Component implements OnInit {
  [x: string]: any;
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

  // displayedColumns: any = [

  //   'boundary_dimensions_mm_Shaft_dia',
  //   'boundary_dimensions_mm__Fw',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__C',
  //   'boundary_dimensions_mm_dw_E7',
  //   'boundary_dimensions_mm__Da',
  //   'boundary_dimensions_mm__C1',
  //   'boundary_dimensions_mm__C2',
  //   'boundary_dimensions_mm_r_min',
  //   'bearing_No_RAXR',
  //   'bearing_No_NAXR',
  //   'bearing_No_NAXR_Z',
  //   'limiting_speed_min_1',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_radial_C0r',
  //   'basic_load_limits_kN_thrust_Ca',
  //   'basic_load_ratings_kN_Thrust_C0a',
  //   'fatigue_load_limits_kN_Cu_Radial',
  //   'fatigue_load_limits_kN_Cu_Thrust',
  //   'refer_Mass_kg',
  //   'matching_inner_ring_No'
  //   // 'boundary_dimensions_mm_Shaft_dia',
  //   // 'boundary_dimensions_mm__Fw',
  //   // 'boundary_dimensions_mm__D',
  //   // 'boundary_dimensions_mm__C',
  //   // 'boundary_dimensions_mm_dw_E7',
  //   // 'boundary_dimensions_mm__Da',
  //   // 'boundary_dimensions_mm__C1',
  //   // 'boundary_dimensions_mm__C2',
  //   // 'boundary_dimensions_mm_r_min',
  //   // 'bearing_No_RAXZ',
  //   // 'bearing_No_RAXR',
  //   // 'bearing_No_RAXR_Z',
  //   // 'limiting_speed_min_1',
  //   // 'basic_load_ratings_kN_Cr',
  //   // 'basic_load_ratings_kN_C0r',
  //   // 'basic_load_limits_kN_Cu',
  //   // 'basic_load_ratings_kN_C0a',
  //   // 'fatigue_load_limits_kN_Cu_Radial_Thrust',
  //   // //"column19": "1.85",
  //   // 'refer_Mass_kg',
  //   // 'matching_inner_ring_No'

  // ];
  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_Shaft_dia',
      header: 'Shaft dia',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Fw',
      header: 'Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__D',
      header: 'D',
      cell: (element: any) => `${element.Boundary_dimensions_mm__D}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__C',
      header: 'C',
      cell: (element: any) => `${element.Boundary_dimensions_mm__C}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_dw_E7',
      header: 'dw (E7)',
      cell: (element: any) => `${element.Boundary_dimensions_mm_dw_E7}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Da',
      header: 'Da',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Da}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__C1',
      header: 'C1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__C1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__C2',
      header: 'C2',
      cell: (element: any) => `${element.Boundary_dimensions_mm__C2}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Bearing_No_RAXR',
      header: 'RAXZ',
      cell: (element: any) => `${element.Bearing_No_RAXR}`,
    },
    {
      columnDef: 'bearing_No_NAXR',
      header: 'NAXR',
      cell: (element: any) => `${element.bearing_No_NAXR}`,
    },

    {
      columnDef: 'bearing_No_NAXR_Z',
      header: 'NAXR.Z',
      cell: (element: any) => `${element.bearing_No_NAXR_Z}`,
    },
    {
      columnDef: 'Limiting_speed_min_1',
      header: '',
      cell: (element: any) => `${element.Limiting_speed_min_1}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_Cr',
      header: 'Radial Cr',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Cr}`,
    },
    {
      columnDef: 'basic_load_ratings_kN_radial_C0r',
      header: 'Radial C0r',
      cell: (element: any) => `${element.basic_load_ratings_kN_radial_C0r}`,
    },
    {
      columnDef: 'basic_load_limits_kN_thrust_Ca',
      header: 'Thrust Ca',
      cell: (element: any) => `${element.basic_load_limits_kN_thrust_Ca}`,
    },
    {
      columnDef: 'basic_load_ratings_kN_Thrust_C0a',
      header: 'Thrust C0a',
      cell: (element: any) => `${element.basic_load_ratings_kN_Thrust_C0a}`,
    },
    {
      columnDef: 'fatigue_load_limits_kN_Cu_Radial',
      header: 'Cu Radial',
      cell: (element: any) => `${element.fatigue_load_limits_kN_Cu_Radial}`,
    },
    {
      columnDef: 'fatigue_load_limits_kN_Cu_Thrust',
      header: 'Cu Thrust',
      cell: (element: any) => `${element.fatigue_load_limits_kN_Cu_Thrust}`,
    },
    {
      columnDef: 'Refer_Mass_kg',
      header: '',
      cell: (element: any) => `${element.Refer_Mass_kg}`,
    },
    {
      columnDef: 'Matching_inner_ring_No',
      header: '',
      cell: (element: any) => `${element.Matching_inner_ring_No}`,
    },
    // {
    //   columnDef: 'Refer_Cylindrical_bore',
    //   header: 'Cylindrical bore',
    //   cell: (element: any) => `${element.Refer_Cylindrical_bore}`,
    // },
    // {
    //   columnDef: 'Mass_kg_Tapered_bore',
    //   header: 'Tapered bore',
    //   cell: (element: any) => `${element.Mass_kg_Tapered_bore}`,
    // },
    //  { columnDef: 'mounting_dimensions_mm__Db_max',   header: 'Db max', cell: (element: any) => `${element.mounting_dimensions_mm__Db_max}`   },
    //  { columnDef: 'mounting_dimensions_mm__Db_min',   header: 'Db min', cell: (element: any) => `${element.mounting_dimensions_mm__Db_min}`   },
    //  { columnDef: 'mounting_dimensions_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`   },
    //  { columnDef: 'mounting_dimensions_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`   },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  table_data!: any;

  constructor(
    private service: BearingCatalogueService,
    private loader: AppLoaderService,
    private snackbar: MatSnackBar
  ) {}

  GetCombinedneedlemetricseries2() {
    this.service.GetCombinedneedlemetricseries2().subscribe((res) => {
      this.loader.close();
      console.log(res);
      //
      this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
    });
  }

  ngOnInit() {
    this.GetCombinedneedlemetricseries2();
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

  //  Whether the number of selected elements matches the total number of rows.
  // isAllSelected() {
  //   const numSelected = this.selection.selected.length;
  //   const numRows = this.dataSource.data.length;
  //   return numSelected === numRows;
  // }
}
