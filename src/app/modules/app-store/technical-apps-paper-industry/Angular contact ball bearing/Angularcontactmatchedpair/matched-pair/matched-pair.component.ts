//import { Component, OnInit } from '@angular/core';
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
  selector: 'app-matched-pair',
  templateUrl: './matched-pair.component.html',
  styleUrls: ['./matched-pair.component.scss'],
})
export class MatchedPairComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm__B1',
      header: 'B1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r1_min',
      header: 'r1 min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r1_min}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_With_machined_cages_Cr',
      header: 'With machined cages Cr',
      cell: (element: any) => `${element.Basic_load_ratings_KN_With_machined_cages_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_With_machined_cages_C0r',
      header: 'With machined cages C0r',
      cell: (element: any) => `${element.Basic_load_ratings_KN_With_machined_cages_C0r}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_With_pressed_cages_Cr',
      header: 'With pressed cages Cr',
      cell: (element: any) => `${element.Basic_load_ratings_KN_With_pressed_cages_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_With_pressed_cages_C0r',
      header: 'With pressed cages C0r',
      cell: (element: any) => `${element.Basic_load_ratings_KN_With_pressed_cages_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_limits_kN_With_machined_cages',
      header: 'With machined cage Cu',
      cell: (element: any) => `${element.Fatigue_load_limits_kN_With_machined_cages}`,
    },
    {
      columnDef: 'Fatigue_load_limits_kN_With_pressed_cages',
      header: 'With pressed cage Cu',
      cell: (element: any) => `${element.Fatigue_load_limits_kN_With_pressed_cages}`,
    },

    { columnDef: 'Factor', header: 'f0', cell: (element: any) => `${element.Factor}` },
    {
      columnDef: 'Limiting_speeds_Grease_lub',
      header: 'Grease lub.',
      cell: (element: any) => `${element.Limiting_speeds_Grease_lub}`,
    },
    {
      columnDef: 'Limiting_speeds_Oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_Oil_lub}`,
    },
    {
      columnDef: 'Bearing_No_DB',
      header: 'Back-to-back DB',
      cell: (element: any) => `${element.Bearing_No_DB}`,
    },
    {
      columnDef: 'BearingNo_DF',
      header: 'Face-to-face DF',
      cell: (element: any) => `${element.BearingNo_DF}`,
    },
    {
      columnDef: 'Bearing_No_DT',
      header: 'Tandem DT',
      cell: (element: any) => `${element.Bearing_No_DT}`,
    },
    {
      columnDef: 'Load_center_spread_mm_a1',
      header: 'a1',
      cell: (element: any) => `${element.Load_center_spread_mm_a1}`,
    },
    {
      columnDef: 'Load_center_spread_mm_a2',
      header: 'a2',
      cell: (element: any) => `${element.Load_center_spread_mm_a2}`,
    },
    {
      columnDef: 'Mounting_dimensions_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_da_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_db_min',
      header: 'db min',
      cell: (element: any) => `${element.Mounting_dimensions_db_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.Mounting_dimensions_Da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_Db_max',
      header: 'Db max',
      cell: (element: any) => `${element.Mounting_dimensions_Db_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Mounting_dimensions_ra_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_rb_max',
      header: 'rb max',
      cell: (element: any) => `${element.Mounting_dimensions_rb_max}`,
    },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    //  { columnDef: 'refer_Bearing_No',   header: '', cell: (element: any) => `${element.refer_Bearing_No}`   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  // 'boundary_dimensionsmm_d_min',
  // 'boundary_dimensionsmm__D_min',
  // 'boundary_dimensionsmm__B1',
  // 'boundary_dimensionsmm_r',
  // 'boundary_dimensionsmm_r1',
  // 'basic_load_ratings_kN_With_machined_Cr',
  // 'basic_load_ratings_kN_cages_C0r',
  // 'basic_load_ratings_kN_With_pressed_Cr',
  // 'basic_load_ratings_kN_cages__C0r',
  // 'fatigue_load_limits_kN_With_machined_cages',
  // 'fatigue_load_limits_kN_With_pressed_cages',
  // 'factor',
  // 'limiting_speeds_1_min_1_Grease_lub',
  // 'limiting_speeds_1_min_1_Oil_lub',
  // 'bearing_No_Back_to_back_DB',
  // 'bearing_No_Face_to_face_DF',
  // 'bearing_No_Tandem_DT',
  // 'load_center_spread_mm_a_1',
  // 'load_center_spread_mm_a_2',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm_db_min',
  // 'mounting_dimensions_mm__da_max',
  // 'mounting_dimensions_mm__db_max',
  // 'mounting_dimensions_mm__ra_max',
  // 'mounting_dimensions_mm__rb_max',
  // 'refer_Mass_kg',

  //   'boundary_dimensionsmm_d_min',
  //   'boundary_dimensionsmm__D_min',
  //   'boundary_dimensionsmm__B1',
  //   'boundary_dimensionsmm_r_min',
  //   'boundary_dimensionsmm_r1_min',
  //   'basic_load_ratings_kN_Cu_With_machined_Cages_Cr',
  //   'basic_load_ratings_kN_Cu_With_machined_Cages_C0r',
  //   'basic_load_ratings_kN_With_pressed_Cr',
  //   'basic_load_ratings_kN_With_pressed_Cor',
  //   'fatigue_load_ratings_kN_cu_With_machined_cages',
  //   'fatigue_load_ratings_kN_cu_With_pressed_cages',
  //   'factoe_f0',
  //   'limiting_speeds_1_min_1_Grease_lub',
  //   'limiting_speeds_1_min_1_Oil_lub',
  //   'bearing_No_Back_to_back_DB',
  //   'bearing_No_Face_to_face_DF',
  //   'bearing_No_Tandem_DT',
  //   'load_center_spread_mm_a_1',
  //   'load_center_spread_mm_a_2',
  //   'mounting_dimensions_mm_da_min',
  //   'mounting_dimensions_mm_db_min',
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm__Db_max',
  //   'mounting_dimensions_mm__ra_max',
  //   'mounting_dimensions_mm__rb_max',
  //   'refer_Mass_kg'
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
  GetMatchedpair() {
    //
    this.service.GetMatchedpair().subscribe((res) => {
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
    this.GetMatchedpair();
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
