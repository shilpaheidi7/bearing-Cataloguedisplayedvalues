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
  selector: 'app-thrusttable',
  templateUrl: './thrusttable.component.html',
  styleUrls: ['./thrusttable.component.scss'],
})
export class ThrusttableComponent implements OnInit {
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
      header: 'Shaft dia  ',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Dc1',
      header: 'Dc1 (E11) ',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Dc1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Dc',
      header: 'Dc (a13)',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Dc}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__sDw',
      header: 'Dw',
      cell: (element: any) => `${element.Boundary_dimensions_mm__sDw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__T',
      header: 'T',
      cell: (element: any) => `${element.Boundary_dimensions_mm__T}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Eb_min',
      header: 'Eb max.',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Eb_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Ea_min',
      header: 'Ea min',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Ea_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__ra_max',
      header: 'ra max.',
      cell: (element: any) => `${element.Boundary_dimensions_mm__ra_max}`,
    },
    { columnDef: 'Bearing_No', header: '', cell: (element: any) => `${element.Bearing_No}` },
    {
      columnDef: 'Basic_load_ratings_kN_Ca',
      header: 'Ca',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Ca}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0a',
      header: 'C0a',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0a}`,
    },

    {
      columnDef: 'Fatiuge_load_limits_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatiuge_load_limits_kN_Cu}`,
    },
    {
      columnDef: 'Limiting_speeds_min_Oil_lub',
      header: '',
      cell: (element: any) => `${element.Limiting_speeds_min_Oil_lub}`,
    },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    {
      columnDef: 'Washer_dimensions_mm_d',
      header: 'd',
      cell: (element: any) => `${element.Washer_dimensions_mm_d}`,
    },
    {
      columnDef: 'Washer_dimensions_mm__D1',
      header: 'D1',
      cell: (element: any) => `${element.Washer_dimensions_mm__D1}`,
    },
    {
      columnDef: 'Washer_dimensions_mm__D_d1',
      header: 'D, d1',
      cell: (element: any) => `${element.Washer_dimensions_mm__D_d1}`,
    },
    {
      columnDef: 'washer_dimensions_mm_h_max',
      header: 'h max',
      cell: (element: any) => `${element.washer_dimensions_mm_h_max}`,
    },
    {
      columnDef: 'washer_dimensions_mm_h_min',
      header: 'h min',
      cell: (element: any) => `${element.washer_dimensions_mm_h_min}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Washer_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Washer_No_Shaft_piloted',
      header: 'Shaft piloted',
      cell: (element: any) => `${element.Washer_No_Shaft_piloted}`,
    },
    {
      columnDef: 'Washer_No_Housing_piloted',
      header: 'Housing piloted',
      cell: (element: any) => `${element.Washer_No_Housing_piloted}`,
    },
    { columnDef: 'Refer_mass__kg', header: '', cell: (element: any) => `${element.Refer_mass__kg}` },
    //  { columnDef: 'heavy_h_mm',   header: 'h (mm)', cell: (element: any) => `${element.heavy_h_mm}`   },
    //  { columnDef: 'heavy_r_min_mm',   header: 'r min (mm)', cell: (element: any) => `${element.heavy_r_min_mm}`   },
    //  { columnDef: 'heavy_Washer_No_Shaft_piloted',   header: 'Shaft piloted', cell: (element: any) => `${element.heavy_Washer_No_Shaft_piloted}`   },
    //  { columnDef: 'heavy_Washer_No_Housing_piloted',   header: 'Housing piloted', cell: (element: any) => `${element.heavy_Washer_No_Housing_piloted}`   },
    //  { columnDef: 'heavy_Washer_No_Refer_Mass_kg',   header: '', cell: (element: any) => `${element. heavy_Washer_No_Refer_Mass_kg} `   },
    //  { columnDef: 'mounting_dimensions_mm_ra_max ',   header: 'ra max', cell: (element: any) => `${element. mounting_dimensions_mm_ra_max} `   },
    //  { columnDef: ' mounting_dimensions_mm_rb_max ',   header: 'rb max ', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max} `   },
    //  { columnDef: 'refer_Mass_kg_With_flat_back_faces ',   header: 'With flat back faces', cell: (element: any) => `${element. refer_Mass_kg_With_flat_back_faces} `   },
    //  { columnDef: ' refer_Mass_kg_With_aligning_seat_races ',   header: 'With aligning seat races', cell: (element: any) => `${element. refer_Mass_kg_With_aligning_seat_races} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_Shaft_dia',
  //   'boundary_dimensions_mm__Dc1',
  //   'boundary_dimensions_mm__Dc',
  //   'boundary_dimensions_mm__sDw',
  //   'boundary_dimensions_mm__T',
  //   'boundary_dimensions_mm__Eb_min',
  //   'boundary_dimensions_mm__Ea_min',
  //   'boundary_dimensions_mm__ra_max',
  //   'bearing_No',
  //   'basic_load_ratings_kN_Ca',
  //   'basic_load_ratings_kN_C0a',
  //   'fatiuge_load_limits_kN_Cu',
  //   'limiting_speeds_min_Oil_lub',
  //   'refer_Mass_kg',
  //   'washer_dimensions_mm_d',
  //   'washer_dimensions_mm__D1',
  //   'washer_dimensions_mm__D_d1',
  //   'washer_dimensions_mm_h_max',
  //   'washer_dimensions_mm_h_min',
  //   'washer_dimensions_mm_r_min',
  //   'washer_No_Shaft_piloted',
  //   'washer_No_Housing_piloted',
  //   'refer_mass__kg'

  // 'boundary_dimensions_mm_Shaft_dia',
  // 'boundary_dimensions_mm__Dc1',
  // 'boundary_dimensions_mm__Dc',
  // 'boundary_dimensions_mm__sDw',
  // 'boundary_dimensions_mm__Ea',
  // 'boundary_dimensions_mm__Eb',
  // 'boundary_dimensions_mm__ra_max',
  // 'bearing_No',
  // //"column9": "25",
  // //"column10": "",
  // 'basic_load_ratings_kN_Ca',
  // 'basic_load_ratings_kN_C0a',
  // 'basic_load_limits_kN_Cu',
  // 'limiting_speeds_min_Oil_lub',
  // 'refer_Mass_kg',
  // 'washer_dimensions_mm_d',
  // 'washer_dimensions_mm__D1',
  // 'washer_dimensions_mm__D_d1',
  // 'washer_dimensions_mm_h',
  // //"column20": "2.64",
  // 'washer_dimensions_mm_r_min',
  // 'washer_No_Shaft_piloted',
  // 'washer_No_Housing_piloted'

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

  GetNeedlerollerthrustmetricseries2() {
    this.loader.open();
    this.service.GetNeedlerollerthrustmetricseries2().subscribe((res) => {
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
    this.GetNeedlerollerthrustmetricseries2();
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
