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
  selector: 'app-miniatureonewaytable',
  templateUrl: './miniatureonewaytable.component.html',
  styleUrls: ['./miniatureonewaytable.component.scss'],
})
export class MiniatureonewaytableComponent implements OnInit {
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
  //   'boundary_dimensions_mm__Fw',
  //   'boundary_dimensions_mm__D1',
  //   'boundary_dimensions_mm__D2',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm__A',
  //   'torque_capacity_N_m',
  //   'designations_1_WC_series',
  //   'designations_EWC_series',
  //   'no_of_outer_ring_protrusion',
  //   'recommended_housing_dimensions_mm_HD',
  //   'recommended_housing_dimensions_mm_a',
  //   'recommended_housing_dimensions_mm_b',
  //   'recommended_housing_dimensions_mm_r',
  //   'recommended_housing_dimensions_mm_Da',
  //   'recommended_housing_dimensions_mm_D2',
  //   'refer_Mass_g_1_WC',
  //   'refer_Mass_g_1_EWC'
  //   // 'boundary_dimensions_mm_Shaft_dia',
  //   // 'boundary_dimensions_mm__Fw',
  //   // 'boundary_dimensions_mm__D1',
  //   // 'boundary_dimensions_mm__D2',
  //   // 'boundary_dimensions_mm__B',
  //   // 'boundary_dimensions_mm__A',
  //   // 'torque_capacity_N_m',
  //   // 'designations_1_WC_series_EWC_series',
  //   // 'no_of_1_outer_ring_protrusion',
  //   // 'recommended_housing_dimensions_mm_HD',
  //   // //"column11": "",
  //   // //"column12": "",
  //   // //"column13": "",
  //   // //"column14": "",
  //   // //"column15": "",
  //   // 'refer_Mass_g_1_WC_EWC',
  //   // //"column17": ""

  // ];

  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_Shaft_dia',
      header: 'Shaft dia (mm) d',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Fw',
      header: 'Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__D1',
      header: 'D1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__D1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__D2',
      header: 'D2',
      cell: (element: any) => `${element.Boundary_dimensions_mm__D2}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__B',
      header: 'B',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__A',
      header: 'A',
      cell: (element: any) => `${element.Boundary_dimensions_mm__A}`,
    },
    {
      columnDef: 'Torque_capacity_N_m',
      header: '',
      cell: (element: any) => `${element.Torque_capacity_N_m}`,
    },
    {
      columnDef: 'designations_1_WC_series',
      header: '1WC series (With metal springs)',
      cell: (element: any) => `${element.designations_1_WC_series}`,
    },
    {
      columnDef: 'designations_EWC_series',
      header: 'EWC series (With resin springs)',
      cell: (element: any) => `${element.designations_EWC_series}`,
    },
    {
      columnDef: 'no_of_outer_ring_protrusion',
      header: '',
      cell: (element: any) => `${element.no_of_outer_ring_protrusion}`,
    },
    {
      columnDef: 'recommended_housing_dimensions_mm_HD',
      header: 'HD',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_HD}`,
    },

    {
      columnDef: 'recommended_housing_dimensions_mm_a',
      header: 'a',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_a}`,
    },
    {
      columnDef: 'recommended_housing_dimensions_mm_b',
      header: 'b',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_b}`,
    },
    {
      columnDef: 'recommended_housing_dimensions_mm_r',
      header: 'r',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_r}`,
    },
    {
      columnDef: 'recommended_housing_dimensions_mm_Da',
      header: 'Da',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_Da}`,
    },
    {
      columnDef: 'recommended_housing_dimensions_mm_D2',
      header: ' D2)',
      cell: (element: any) => `${element.recommended_housing_dimensions_mm_D2}`,
    },
    {
      columnDef: 'refer_Mass_g_1_WC',
      header: '1WC',
      cell: (element: any) => `${element.refer_Mass_g_1_WC}`,
    },
    { columnDef: 'refer_Mass_g_1_EWC', header: 'EWC', cell: (element: any) => `${element.refer_Mass_g_1_EWC}` },
    // { columnDef: 'Matching_inner_ring_No', header: '', cell: (element: any) => `${element.Matching_inner_ring_No}` },
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

  GetMiniatureonewayclutches() {
    // this.loader.open();
    this.service.GetMiniatureonewayclutches().subscribe((res) => {
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
    this.GetMiniatureonewayclutches();
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
