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
  selector: 'app-deepgroovesinglerowsnapring',
  templateUrl: './deepgroovesinglerowsnapring.component.html',
  styleUrls: ['./deepgroovesinglerowsnapring.component.scss'],
})
export class DeepgroovesinglerowsnapringComponent implements OnInit {
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

  // "Boundary_dimensions_mm__D": 22,
  // "Boundary_dimensions_mm__B": 6,
  // "Boundary_dimensions_mm_r1": 0.3,
  // "Boundary_dimensions_mm_r1_min": 0.3,
  // "Basic_load_ratings_kN_Cr": 3.35,
  // "Basic_load_ratings_kN_C0r": 1.25,
  // "Fatigue_load_ratings_kN_Cu": 0.07,
  // "Factor_f0": 14,
  // "limiting_speeds_min_1_Grease_lub": "34,000",
  // "limiting_speeds_min_1_Oil_lub": "41,000",
  // "Bearing_No_With_snap_ring_groove": "6900N",
  // "Bearing_No_With_locating_snap_ring": "6900NR",
  // "Dimensions_of_snap_ring_groove_mm__D1_max": 20.8,
  // "Dimensions_of_snap_ring_groove_mm_a_max": 1.05,
  // "Dimensions_of_snap_ring_groove_mm_b_0_15": "0.925 1)",
  // "Dimensions_of_snap_ring_groove_mm_r_max": 0.2,
  // "Dimensions_of_locating_snap_ring_mm__D2": 24.8,
  // "Dimensions_of_locating_snap_ring_mm_f_0_05": 0.65,
  // "Mounting_dimensions_mm_da_min": 12,
  // "Mounting_dimensions_mm__Da_max": 20,
  // "Mounting_dimensions_mm_DX_min": 25.5,
  // "Mounting_dimensions_mm_CY_max": 1.5,
  // "mounting_dimension_mm_ra_max": 0.3,
  // "mounting_dimension_mm_rb_max": 0.3,
  // "Refer_Mass_kg": 0.01,
  // "Refer_Bearing_No": "6900N"

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
      columnDef: 'Boundary_dimensions_mm_r1',
      header: 'r min.',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r1_min',
      header: 'r1 min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r1_min}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_Cr',
      header: 'Cr',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0r',
      header: 'C0r',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_ratings_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_ratings_kN_Cu}`,
    },
    { columnDef: 'Factor_f0', header: ' f0', cell: (element: any) => `${element.Factor_f0}` },
    {
      columnDef: 'limiting_speeds_min_1_Grease_lub',
      header: 'Grease lub',
      cell: (element: any) => `${element.limiting_speeds_min_1_Grease_lub}`,
    },
    {
      columnDef: 'limiting_speeds_min_1_Oil_lub',
      header: 'Oil lub',
      cell: (element: any) => `${element.limiting_speeds_min_1_Oil_lub}`,
    },

    {
      columnDef: 'Bearing_No_With_snap_ring_groove',
      header: 'With snap ring groove',
      cell: (element: any) => `${element.Bearing_No_With_snap_ring_groove}`,
    },
    {
      columnDef: 'Bearing_No_With_locating_snap_ring',
      header: 'With locating snap ring',
      cell: (element: any) => `${element.Bearing_No_With_locating_snap_ring}`,
    },
    {
      columnDef: 'Dimensions_of_snap_ring_groove_mm__D1_max',
      header: 'D1 max',
      cell: (element: any) => `${element.Dimensions_of_snap_ring_groove_mm__D1_max}`,
    },
    {
      columnDef: 'Dimensions_of_snap_ring_groove_mm_a_max',
      header: 'a max',
      cell: (element: any) => `${element.Dimensions_of_snap_ring_groove_mm_a_max}`,
    },
    {
      columnDef: 'Dimensions_of_snap_ring_groove_mm_b_0_15',
      header: 'b ±0.15',
      cell: (element: any) => `${element.Dimensions_of_snap_ring_groove_mm_b_0_15}`,
    },
    {
      columnDef: 'Dimensions_of_snap_ring_groove_mm_r_max',
      header: 'r0 max',
      cell: (element: any) => `${element.Dimensions_of_snap_ring_groove_mm_r_max}`,
    },
    {
      columnDef: 'Dimensions_of_locating_snap_ring_mm__D2',
      header: 'D2 max',
      cell: (element: any) => `${element.Dimensions_of_locating_snap_ring_mm__D2}`,
    },
    {
      columnDef: 'Dimensions_of_locating_snap_ring_mm_f_0_05',
      header: 'f ±0.05',
      cell: (element: any) => `${element.Dimensions_of_locating_snap_ring_mm_f_0_05}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm__Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_DX_min',
      header: 'DX min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_DX_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_CY_max',
      header: 'CY max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_CY_max}`,
    },
    {
      columnDef: 'mounting_dimension_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.mounting_dimension_mm_ra_max}`,
    },
    {
      columnDef: 'mounting_dimension_mm_rb_max',
      header: 'rb max',
      cell: (element: any) => `${element.mounting_dimension_mm_rb_max}`,
    },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    { columnDef: 'Refer_Bearing_No', header: '', cell: (element: any) => `${element.Refer_Bearing_No}` },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: any = [

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm_r1',
  // 'boundary_dimensions_mm_r1_min',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_ratings_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub',
  // 'limiting_speeds_min_1_Oil_lub',
  // 'bearing_No_With_snap_ring_groove',
  // 'bearing_No_With_locating_snap_ring',
  // 'dimensions_of_snap_ring_groove_mm__D1_max',
  // 'dimensions_of_snap_ring_groove_mm_a_max',
  // 'dimensions_of_snap_ring_groove_mm_b_0_15',
  // 'dimensions_of_snap_ring_groove_mm_r_max',
  // 'dimensions_of_locating_snap_ring_mm__D2',
  // 'dimensions_of_locating_snap_ring_mm_f_0_05',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm__Da_max',
  // 'mounting_dimensions_mm_DX_min',
  // 'mounting_dimensions_mm_CY_max',
  // 'mounting_dimension_mm_ra_max',
  // 'mounting_dimension_mm_rb_max',
  // 'refer_Mass_kg',
  // 'refer_Bearing_No'

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm_r1',
  // 'boundary_dimensions_mm_r1_min',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'basic_load_ratings_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_Oil_lub_lub',
  // 'column11',
  // 'bearing_No_With_snap_ring_groove',
  // 'bearing_No_With_locating_snap_ring',
  // 'dimensions_of_snap_ring_groove_mm__D1_max',
  // 'dimensions_of_snap_ring_groove_mm_a_max',
  // 'dimensions_of_snap_ring_groove_mm_b_0_15',
  // 'dimensions_of_snap_ring_groove_mm_r_max',
  // 'dimensions_of_locating_snap_ring_mm__D2',
  // 'dimensions_of_locating_snap_ring_mm_f_0_05',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm__Da_max',
  // 'mounting_dimensions_mm_DX_min',
  // 'mounting_dimensions_mm_CY_max',
  // 'mounting_dimensions_mm_ra_max',
  // 'mounting_dimension_mm_ra_max',
  // 'refer_Mass_kg',
  // 'refer_Bearing_No',
  // ];

  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);

  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  table_data!: any;
  Columns: any;

  constructor(
    private service: BearingCatalogueService,
    private loader: AppLoaderService,
    private snackbar: MatSnackBar
  ) {}
  GetSinglerowsnapringgroovetype() {
    // this.loader.open();
    this.service.GetSinglerowsnapringgroovetype().subscribe((res) => {
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
    this.GetSinglerowsnapringgroovetype();
    // this.loader.open();
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
