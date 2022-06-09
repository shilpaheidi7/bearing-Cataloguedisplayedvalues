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
  selector: 'app-Needlerollerthrustinchseries',
  templateUrl: './Needlerollerthrustinchseries.component.html',
  styleUrls: ['./Needlerollerthrustinchseries.component.scss'],
})
export class NeedlerollerthrustinchseriesComponent implements OnInit {
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

  //   'boundary_dimensions_mm_Shaft_dia_in',
  //   'boundary_dimensions_mm__Dc1',
  //   'boundary_dimensions_mm__Dc',
  //   'boundary_dimensions_mm__Dw',
  //   'boundary_dimensions_mm__Eb',
  //   'boundary_dimensions_mm__Ea',
  //   'bearing_No',
  //   'basic_load_ratings_kN_Ca',
  //   'basic_load_ratings_kN_C0a',
  //   'fatigue_load_limits_kN_Cu',
  //   'limiting_speed_1_min_1',
  //   'refer_Mass_kg',
  //   'washer_No',
  //   'washer_dimensions_mm_d',
  //   'washer_dimensions_mm_d1',
  //   'washer_dimensions_mm_h_max',
  //   'washer_dimensions_mm_h_min',
  //   //"column17": "0.76",
  //   'piloting_dimensions_mm_S_max',
  //   'piloting_dimensions_mm_S_min',
  //   'dia_to_clear_O_D_mm_H_2',
  //   'refer_Washer_mass_kg'
  //   // 'boundary_dimensions_mm_Shaft_dia_in',
  // 'boundary_dimensions_mm__Dc1',
  // 'boundary_dimensions_mm__Dc',
  // 'boundary_dimensions_mm__Dw',
  // 'boundary_dimensions_mm__Eb',
  // 'boundary_dimensions_mm__Ea',
  // 'bearing_No',
  // 'basic_load_ratings_kN_Ca',
  // 'basic_load_ratings_kN_C0a',
  // 'basic_load_limits_kN_Cu',
  // 'limiting_speed_1_min_1',
  // 'refer_Mass_kg',
  // 'washer_No',
  // 'washer_dimensions_mm_d',
  // 'washer_dimensions_mm_d1',
  // 'washer_dimensions_mm_h',
  // //"column17": "0.76",
  // 'piloting_dimensions_mm_S_max',
  // 'piloting_dimensions_mm_S_min',
  // 'dia_to_clear_O_D_mm_H_2',
  // 'refer_Washer_mass_kg'

  // ];

  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_Shaft_dia_in',
      header: 'Shaft dia ',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia_in}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Dc1',
      header: 'Dc1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Dc1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Dc',
      header: 'Dc',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Dc}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Dw',
      header: 'Dw',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Dw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Eb',
      header: 'Eb',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Eb}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Ea',
      header: 'Ea',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Ea}`,
    },
    { columnDef: 'Bearing_No', header: ' ', cell: (element: any) => `${element.Bearing_No}` },
    {
      columnDef: 'Basic_load_ratings_kN_Ca',
      header: 'Ca ',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Ca}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0a',
      header: 'C0a',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0a}`,
    },
    {
      columnDef: 'Fatique_load_limits_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatique_load_limits_kN_Cu}`,
    },
    {
      columnDef: 'Limiting_speed_1_min_1',
      header: '',
      cell: (element: any) => `${element.Limiting_speed_1_min_1}`,
    },

    {
      columnDef: 'Refer_Mass_kg',
      header: '',
      cell: (element: any) => `${element.Refer_Mass_kg}`,
    },
    { columnDef: 'Washer_No', header: '', cell: (element: any) => `${element.Washer_No}` },
    // { columnDef: 'Inspection_gage', header: '', cell: (element: any) => `${element.Inspection_gage}` },
    {
      columnDef: 'Washer_dimensions_mm_d',
      header: 'd',
      cell: (element: any) => `${element.Washer_dimensions_mm_d}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_d1',
      header: 'd1',
      cell: (element: any) => `${element.Washer_dimensions_mm_d1}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_h_max',
      header: 'h max',
      cell: (element: any) => `${element.Washer_dimensions_mm_h_max}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_h_min',
      header: 'h min',
      cell: (element: any) => `${element.Washer_dimensions_mm_h_min}`,
    },
    {
      columnDef: 'Piloting_dimensions_mm_S_max',
      header: 's max',
      cell: (element: any) => `${element.Piloting_dimensions_mm_S_max}`,
    },
    {
      columnDef: 'Piloting_dimensions_mm_S_min',
      header: 's min',
      cell: (element: any) => `${element.Piloting_dimensions_mm_S_min}`,
    },
    {
      columnDef: 'Dia_to_clear_O_D_mm_H_2',
      header: 'H 2)',
      cell: (element: any) => `${element.Dia_to_clear_O_D_mm_H_2}`,
    },
    { columnDef: 'Refer_Washer_mass_kg', header: '', cell: (element: any) => `${element.Refer_Washer_mass_kg}` },
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

  GetNeedlerollerthrustinchseries() {
    this.service.GetNeedlerollerthrustinchseries().subscribe((res) => {
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
    this.GetNeedlerollerthrustinchseries();
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
