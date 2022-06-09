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
  selector: 'app-inchseries',
  templateUrl: './inchseries.component.html',
  styleUrls: ['./inchseries.component.scss'],
})
export class InchseriesComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm__T',
      header: 'T',
      cell: (element: any) => `${element.Boundary_dimensions_mm__T}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__B',
      header: 'B',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__C',
      header: 'C',
      cell: (element: any) => `${element.Boundary_dimensions_mm__C}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__r1_min',
      header: 'r1 min',
      cell: (element: any) => `${element.Boundary_dimensions_mm__r1_min}`,
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
      header: 'Grease lub',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub}`,
    },

    {
      columnDef: 'Limiting_speeds_min_1_Oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Oil_lub}`,
    },
    {
      columnDef: 'Bearing_No_Inner_ring',
      header: 'Inner ring',
      cell: (element: any) => `${element.Bearing_No_Inner_ring}`,
    },
    {
      columnDef: 'Bearing_No_Outer_ring',
      header: 'Outer ring ',
      cell: (element: any) => `${element.Bearing_No_Outer_ring}`,
    },
    { columnDef: 'Load_center_mm_a', header: 'a', cell: (element: any) => `${element.Load_center_mm_a}` },
    {
      columnDef: 'mounting_dimensions_mm_da',
      header: 'da',
      cell: (element: any) => `${element.mounting_dimensions_mm_da}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_db',
      header: 'db',
      cell: (element: any) => `${element.mounting_dimensions_mm_db}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Da',
      header: 'Da ',
      cell: (element: any) => `${element.mounting_dimensions_mm__Da}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Db',
      header: 'Db',
      cell: (element: any) => `${element.mounting_dimensions_mm__Db}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_ra_max',
      header: 'ra max ',
      cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_rb_max',
      header: 'rb  max',
      cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`,
    },
    { columnDef: 'Con_stant_e', header: 'e', cell: (element: any) => `${element.Con_stant_e}` },
    { columnDef: 'axial_load_factors_Y1', header: 'Y1', cell: (element: any) => `${element.axial_load_factors_Y1}` },
    { columnDef: 'axial_load_factors_Y0', header: 'Y0', cell: (element: any) => `${element.axial_load_factors_Y0}` },
    {
      columnDef: 'refer_Mass_kg_Inner_ring',
      header: 'Inner ring',
      cell: (element: any) => `${element.refer_Mass_kg_Inner_ring}`,
    },
    {
      columnDef: 'refer_Mass_kg_Outer_ring',
      header: 'Outer ring',
      cell: (element: any) => `${element.refer_Mass_kg_Outer_ring}`,
    },
    //  { columnDef: 'mounting_dimensions_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`   },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__T',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm__C',
  //   'boundary_dimensions_mm_r_min',
  //   'boundary_dimensions_mm__r1_min',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'fatigue_load_limits_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_Oil_lub',
  //   'bearing_No_Inner_ring',
  //   'bearing_No_Outer_ring',
  //   'load_center_mm_a',
  //   'mounting_dimensions_mm_da',
  //   'mounting_dimensions_mm_db',
  //   'mounting_dimensions_mm__Da',
  //   'mounting_dimensions_mm__Db',
  //   'mounting_dimensions_mm_ra_max',
  //   'mounting_dimensions_mm_rb_max',
  //   'con_stant_e',
  //   'axial_load_factors_Y1',
  //   'axial_load_factors_Y0',
  //   'refer_Mass_kg_Inner_ring',
  //   'refer_Mass_kg_Outer_ring'

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__T',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm__C',
  //   'boundary_dimensions_mm_r_min',
  //   'boundary_dimensions_mm__r1_min',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'basic_load_limit_kN_Cu',
  //  'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_Oil_lub',
  //   'bearing_No_Inner_ring',
  //   'bearing_No_Outer_ring',
  //  'load_center_mm_a',
  //   'mounting_dimensions_mm_da__Da_ra_rb_max',
  //  // "column17": "13.5",
  //   //"column18": "26",
  //   //"column19": "29",
  //   //"column20": "1.2",
  //   //"column21": "1.2",
  //   'con_stant_e',
  //   'axial_load_factors_Y1_Y0',
  //  // 'column24',
  //   'refer_Mass_kg_Inner_ring_Outer_ring',
  //   //"column26": "0.017"
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
  Getsinglerowinchseries() {
    //
    this.service.Getsinglerowinchseries().subscribe((res) => {
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
    this.Getsinglerowinchseries();
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
