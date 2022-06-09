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
  selector: 'app-drawncupinchseries',
  templateUrl: './drawncupinchseries.component.html',
  styleUrls: ['./drawncupinchseries.component.scss'],
})
export class DrawncupinchseriesComponent implements OnInit {
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

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_Shaft_dia',
  //   'boundary_dimensions_mm_Fw',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm_C',
  //   'boundary_dimensions_mm_Y_max',
  //   'bearing_No_With_open_ends',
  //   'bearing_No_With_closed_end',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'fatigue_load_limits_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_Oil_lub',
  //   'refer_Mass_kg_With_open_ends',
  //   'refer_Mass_kg_With_closed_end',
  //   'inspection_gage'

  // 'boundary_dimensions_mm_Shaft_dia_in',
  // 'boundary_dimensions_mm_Fw',
  // 'boundary_dimensions_mm_Ew',
  // 'boundary_dimensions_mm_Bc',
  // 'bearing_No',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limits_kN_Cu',
  // 'limiting_speeds_min_Grease_lub',
  // 'limiting_speeds_min_Oil_lub',
  // 'recommended_dimensions_mm_Shaft_dia_h5_max',
  // 'recommended_dimensions_mm_Shaft_dia_h5_min',
  // 'recommended_dimensions_mm_S_Housing_bore_dia_G6_max',
  // 'recommended_dimensions_mm_S_Housing_bore_dia_G6_min',
  // 'refer_Mass_kg'

  // ];

  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_Shaft_dia',
      header: 'Shaft dia (in)',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Fw',
      header: 'Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__D',
      header: 'D',
      cell: (element: any) => `${element.Boundary_dimensions_mm__D}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_C',
      header: 'C +0 −0.3',
      cell: (element: any) => `${element.Boundary_dimensions_mm_C}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Y_max',
      header: ' Y max',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Y_max}`,
    },
    {
      columnDef: 'Bearing_No_With_open_ends',
      header: 'With open ends',
      cell: (element: any) => `${element.Bearing_No_With_open_ends}`,
    },
    {
      columnDef: 'Bearing_No_With_closed_end',
      header: 'With closed end ',
      cell: (element: any) => `${element.Bearing_No_With_closed_end}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_Cr',
      header: 'Cr ',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0r',
      header: 'C0r',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_limits_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_limits_kN_Cu}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub',
      header: 'Grease lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub}`,
    },

    {
      columnDef: 'Limiting_speeds_min_1_Oil_lub',
      header: 'Oil lub',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Oil_lub}`,
    },
    {
      columnDef: 'Refer_Mass_kg_With_open_ends',
      header: 'With open ends',
      cell: (element: any) => `${element.Refer_Mass_kg_With_open_ends}`,
    },
    {
      columnDef: 'Refer_Mass_kg_With_closed_end',
      header: 'With closed end',
      cell: (element: any) => `${element.Refer_Mass_kg_With_closed_end}`,
    },
    { columnDef: 'Inspection_gage', header: '', cell: (element: any) => `${element.Inspection_gage}` },
    // { columnDef: 'recommended_dimensions_mm_H_min',   header: 'H (Housing) min', cell: (element: any) => `${element.recommended_dimensions_mm_H_min}`   },
    //  { columnDef: 'dimensions_mm__D1_min',   header: 'D1 min', cell: (element: any) => `${element.dimensions_mm__D1_min}`   },
    //  { columnDef: 'dimensions_mm__D2',   header: 'D2 ', cell: (element: any) => `${element.dimensions_mm__D2}`   },
    //  { columnDef: 'dimensions_mm__D3',   header: 'D3 ', cell: (element: any) => `${element.dimensions_mm__D3}`   },
    //  {  columnDef: 'dimensions_mm__T2',   header: 'T2  ', cell: (element: any) => `${element.dimensions_mm__T2}`   },
    //  { columnDef: 'dimensions_mm__T4',   header: 'T4', cell: (element: any) => `${element.dimensions_mm__T4}`   },
    //  { columnDef: 'dimensions_mm__T6',   header: 'T6', cell: (element: any) => `${element.dimensions_mm__T6}`   },
    //  { columnDef: 'dimensions_mm__A',   header: 'A', cell: (element: any) => `${element.dimensions_mm__A}`   },
    //  { columnDef: 'dimensions_mm__R',   header: 'R', cell: (element: any) => `${element.dimensions_mm__R}`   },
    //  { columnDef: 'dimensions_mm__B',   header: 'B', cell: (element: any) => `${element.dimensions_mm__B}`   },
    //  { columnDef: 'dimensions_mm__C',   header: 'C', cell: (element: any) => `${element.dimensions_mm__C}`   },
    //  { columnDef: 'mounting_dimensions_mm_da_min',   header: 'da min', cell: (element: any) => `${element.mounting_dimensions_mm_da_min}`   },
    //  { columnDef: ' mounting_dimensions_mm__Da_max ',   header: 'Da max', cell: (element: any) => `${element. mounting_dimensions_mm__Da_max} `   },
    //  { columnDef: 'mounting_dimensions_mm_ra_max ',   header: 'ra max', cell: (element: any) => `${element. mounting_dimensions_mm_ra_max} `   },
    //  { columnDef: ' mounting_dimensions_mm_rb_max ',   header: 'rb max ', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max} `   },
    //  { columnDef: 'refer_Mass_kg_With_flat_back_faces ',   header: 'With flat back faces', cell: (element: any) => `${element. refer_Mass_kg_With_flat_back_faces} `   },
    //  { columnDef: ' refer_Mass_kg_With_aligning_seat_races ',   header: 'With aligning seat races', cell: (element: any) => `${element. refer_Mass_kg_With_aligning_seat_races} `   },
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

  GetDrawcupneedleinchseries() {
    this.service.GetDrawcupneedleinchseries().subscribe((res) => {
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
    this.GetDrawcupneedleinchseries();
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
