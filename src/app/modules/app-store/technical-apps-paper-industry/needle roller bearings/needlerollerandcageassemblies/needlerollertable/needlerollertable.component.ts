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
  selector: 'app-needlerollertable',
  templateUrl: './needlerollertable.component.html',
  styleUrls: ['./needlerollertable.component.scss'],
})
export class NeedlerollertableComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm_Shaft_dia',
      header: 'Shaft dia',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Fw',
      header: 'Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Ew',
      header: 'Ew',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Ew}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Bc_0_20_0_55',
      header: 'Bc −0.20 −0.55',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Bc_0_20_0_55}`,
    },
    {
      columnDef: 'Bearing_No',
      header: ' ',
      cell: (element: any) => `${element.Bearing_No}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_Cr',
      header: 'Cr',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0r',
      header: 'C0r ',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_limit_kN_Cu',
      header: 'Cu ',
      cell: (element: any) => `${element.Fatigue_load_limit_kN_Cu}`,
    },
    { columnDef: 'Cage_material_P_S', header: 'P / S', cell: (element: any) => `${element.Cage_material_P_S}` },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub',
      header: 'Grease lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Oil_lub}`,
    },

    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    {
      columnDef: 'Recommended_dimensions_S_max',
      header: 'S (Shaft) max',
      cell: (element: any) => `${element.Recommended_dimensions_S_max}`,
    },
    {
      columnDef: 'Recommended_dimensions_S_min',
      header: 'S (Shaft) min',
      cell: (element: any) => `${element.Recommended_dimensions_S_min}`,
    },
    {
      columnDef: 'Recommended_dimensions_H_max',
      header: ' H (Housing) max',
      cell: (element: any) => `${element.Recommended_dimensions_H_max}`,
    },
    {
      columnDef: 'Recommended_dimensions_mm_H_min',
      header: 'H (Housing) min',
      cell: (element: any) => `${element.Recommended_dimensions_mm_H_min}`,
    },
    // {
    //   columnDef: 'mounting_dimensions_mm__Da_max',
    //   header: 'D1 min',
    //   cell: (element: any) => `${element.mounting_dimensions_mm__Da_max}`,
    // },
    // {
    //   columnDef: 'mounting_dimensions_mm_ra_max',
    //   header: 'D2 ',
    //   cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`,
    // },
    // { columnDef: 'Refer_Mass_kg', header: 'D3 ', cell: (element: any) => `${element.Refer_Mass_kg}` },
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

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_Shaft_dia',
  //   'boundary_dimensions_mm_Fw',
  //   'boundary_dimensions_mm_Ew',
  //   'boundary_dimensions_mm_Bc_0_20_0_55',
  //   'bearing_No',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'fatigue_load_limit_kN_Cu',
  //   'cage_material_P_S',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_Oil_lub',
  //   'refer_Mass_kg',
  //   'recommended_dimensions_S_max',
  //   'recommended_dimensions_S_min',
  //   'recommended_dimensions_H_max',
  //   'recommended_dimensions_mm_H_min'

  // 'boundary_dimensions_mm_Shaft_dia',
  // 'boundary_dimensions_mm_Fw',
  // 'boundary_dimensions_mm_Ew',
  // 'boundary_dimensions_mm_Bc_0_20_0_55',
  // 'bearing_No',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'basic_load_limits_kN_Cu',
  // 'cage_material_1_P_Stest_7',
  // 'limiting_speeds_min_1_Grease_lub',
  // 'limiting_speeds_min_1_Oil_lub',
  // 'refer_Mass_kg',
  // 'recommended_dimensions_mm_S_Shaft_H_Housing_max',
  //"column14": "2.996",
  //"column15": "5.004",
  //"column16": "5.012"

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

  GetRadialneedlemetricseries() {
    this.loader.open();
    this.service.GetRadialneedlemetricseries().subscribe((res) => {
      //  this.loader.close();
      console.log(res);
      this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
      this.loader.close();
    });
  }

  ngOnInit() {
    this.GetRadialneedlemetricseries();
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
