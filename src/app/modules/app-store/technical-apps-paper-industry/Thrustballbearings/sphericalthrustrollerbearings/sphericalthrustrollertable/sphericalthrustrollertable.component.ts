import { DataSource, SelectionModel } from '@angular/cdk/collections';
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
  selector: 'app-sphericalthrustrollertable',
  templateUrl: './sphericalthrustrollertable.component.html',
  styleUrls: ['./sphericalthrustrollertable.component.scss'],
})
export class SphericalthrustrollertableComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min  ',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
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
      columnDef: 'Limiting_speeds_min_Oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_Oil_lub}`,
    },
    { columnDef: 'Bearing_No', header: '', cell: (element: any) => `${element.Bearing_No}` },
    { columnDef: 'dimensions_mm_d1', header: 'd1', cell: (element: any) => `${element.dimensions_mm_d1}` },
    { columnDef: 'dimensions_mm__D', header: 'D1', cell: (element: any) => `${element.dimensions_mm__D}` },

    { columnDef: 'dimensions_mm__B', header: 'B', cell: (element: any) => `${element.dimensions_mm__B}` },
    { columnDef: 'dimensions_mm__B1', header: ' B1', cell: (element: any) => `${element.dimensions_mm__B1}` },
    { columnDef: 'dimensions_mm__C', header: 'C', cell: (element: any) => `${element.dimensions_mm__C}` },
    { columnDef: 'dimensions_mm__A', header: ' A', cell: (element: any) => `${element.dimensions_mm__A}` },
    {
      columnDef: 'mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.mounting_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'mounting_dimensions_mm_ra_max',
      header: 'ra max ',
      cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`,
    },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
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
  // dataSource = new ExampleDataSource();

  //  ELEMENT_DATA: any[] = [
  //   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  //   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  //   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  //   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  //   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  //   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  //   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  //   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  //   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  //   {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  //   {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  //   {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  //   {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  //   {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  //   {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  //   {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  //   {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  //   {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  //   {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
  // ];

  // displayedColumns: string[] = [

  //   // 'boundary_dimensions_mm_d',
  //   // 'boundary_dimensions_mm__D',
  //   // 'boundary_dimensions_mm__B',
  //   // 'boundary_dimensions_mm_r_min',
  //   // 'basic_load_ratings_kN_Cr',
  //   // 'basic_load_ratings_kN_C0r',
  //   // 'fatigue_load_limits_kN_Cu',
  //   // 'limiting_speeds_min_1_Grease_lub',
  //   // 'limiting_speeds_min_1_Oil_lub',
  //   // 'bearing_No_Cylindrical_bore',
  //   // 'bearing_No_Tapered_bore',
  //   // 'mounting_dimensions_mm_da_min',
  //   // 'mounting_dimensions_mm_da_max',
  //   // 'mounting_dimensions_mm__da_max',
  //   // 'mounting_dimensions_mm__Da_min',
  //   // 'mounting_dimensions_mm_ra_max',
  //   // 'con_stant_e',
  //   // 'axial_load_factors_Y1',
  //   // 'axial_load_factors_Y2',
  //   //  'axial_load_factors_Y0',
  //   // 'refer_Mass_kg_Cylindrical_bore',
  //   // 'refer_Mass_kg_Tapered_bore'

  //   // 'boundary_dimensions_mm_d',
  //   // 'boundary_dimensions_mm__D',
  //   // 'boundary_dimensions_mm__T',
  //   // 'boundary_dimensions_mm_r_min',
  //   // 'basic_load_ratings_kN_Ca',
  //   // 'basic_load_ratings_kN_C0a',
  //   // 'fatique_load_limits_kN_Cu',
  //   // 'limiting_speeds_min_Oil_lub',
  //   // 'bearing_No',
  //   // 'dimensions_mm_d1',
  //   // 'dimensions_mm__D',
  //   // 'dimensions_mm__B',
  //   // 'dimensions_mm__B1',
  //   // 'dimensions_mm__C',
  //   // 'dimensions_mm__A',
  //   // 'mounting_dimensions_mm_da_min',
  //   // 'mounting_dimensions_mm__Da_max',
  //   // 'mounting_dimensions_mm_ra_max',
  //   // 'refer_Mass_kg'

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__T',
  //   'boundary_dimensions_mm_r_min',
  //   'basic_load_ratings_kN_Ca',
  //   'basic_load_ratings_kN_C0a',
  //   'fatique_load_limits_kN_Cu',
  //   'limiting_speeds_min_Oil_lub',
  //   'bearing_No',
  //   'dimensions_mm_d1',
  //   'dimensions_mm__D1',
  //   'dimensions_mm__B',
  //   'dimensions_mm__B1',
  //   'dimensions_mm__C',
  //   'dimensions_mm__A',
  //   'mounting_dimensions_mm_da_min',
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm_ra_max',
  //   'refer_Mass_kg'

  // ];

  dataSource = new MatTableDataSource<Data>(this.ELEMENT_DATA);
  // dataSource = new ExampleDataSource();

  selection = new SelectionModel<Data>(false, []);
  clickedRow = new Set<Data>();

  table_data!: any;

  constructor(
    private service: BearingCatalogueService,
    private loader: AppLoaderService,
    private snackbar: MatSnackBar
  ) {}

  GetGetsphericalthrustroller() {
    this.service.GetGetsphericalthrustroller().subscribe((res) => {
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
    this.GetGetsphericalthrustroller();
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
