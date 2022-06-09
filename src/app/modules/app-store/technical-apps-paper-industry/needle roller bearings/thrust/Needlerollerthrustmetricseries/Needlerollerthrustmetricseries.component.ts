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
  selector: 'app-Needlerollerthrustmetricseries',
  templateUrl: './Needlerollerthrustmetricseries.component.html',
  styleUrls: ['./Needlerollerthrustmetricseries.component.scss'],
})
export class NeedlerollerthrustmetricseriesComponent implements OnInit {
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
  //   'boundary_dimensions_mm__Dc1',
  //   'boundary_dimensions_mm__Dc',
  //   'boundary_dimensions_mm__Dw',
  //   'boundary_dimensions_mm__Ea',
  //   'boundary_dimensions_mm__Eb',
  //   'boundary_dimensions_mm__ra_max',
  //   'bearing_No',
  //   'basic_load_ratings_kN_Ca',
  //   'basic_load_ratings_kN_C0a',
  //   'fatigue_load_limit_kN_Cu',
  //   'limiting_speeds_min_Oil_lub',
  //   'refer_Mass_kg',
  //   'washer_dimensions_mm_d__D',
  //   'washer_dimensions_mm_d_d1',
  //   'washer_dimensions_mm_d__D1',
  //   'thin_h1_mm',
  //   'thin_washer_No',
  //   'thin_refer_mass_kg',
  //   'heavy_LS_h11_mm',
  //   'heavy_LS_a_mm',
  //   'heavy_LS_washer_No',
  //   'heavy_LS_refer_mass_kg',
  //   'heavy_h_mm',
  //   'heavy_r_min_mm',
  //   'heavy_Washer_No_Shaft_piloted',
  //   'heavy_Washer_No_Housing_piloted',
  //   'heavy_Washer_No_Refer_Mass_kg'

  // 'boundary_dimensions_mm_Shaft_dia',
  // 'boundary_dimensions_mm__Dc1',
  // 'boundary_dimensions_mm__Dc',
  // 'boundary_dimensions_mm__Dw',
  // 'boundary_dimensions_mm__Ea',
  // 'boundary_dimensions_mm__Eb',
  // 'boundary_dimensions_mm__ra_max',
  // 'bearing_No',
  // 'basic_load_ratings_kN_Ca',
  // 'basic_load_ratings_kN_C0a',
  // 'fatigue_load_limit_kN_Cu',
  // 'limiting_speeds_min_Oil_lub',
  // 'refer_Mass_kg',
  // 'washer_dimensions_mm_d__D',
  // 'washer_dimensions_mm_d_d1',
  // 'washer_dimensions_mm_d__D1',
  // 'h1_mm_Thin_Washer_No_Refer_Mass_kg',
  // //"column18": "AS0619",
  // //"column19": "0.001",
  // 'heavy_LS_a',
  // 'h_h11_mm_Heavy_LS_a',
  // 'washer_mm_No_Refer_Mass_kg',
  // //"column23": "",
  // 'heavy_h_mm',
  // 'heavy_r_min_mm',
  // 'heavy_Washer_No_Shaft_piloted',
  // 'heavy_Washer_No_Housing_piloted',
  // 'heavy_Washer_No_Refer_Mass_kg'

  // ];

  columns = [
    {
      columnDef: 'Boundary_dimensions_mm_Shaft_dia',
      header: 'Shaft dia  ',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Shaft_dia}`,
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
      columnDef: 'Boundary_dimensions_mm__Ea',
      header: 'Ea',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Ea}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__Eb',
      header: 'Eb',
      cell: (element: any) => `${element.Boundary_dimensions_mm__Eb}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Boundary_dimensions_mm__ra_max}`,
    },
    { columnDef: 'Bearing_No', header: ' ', cell: (element: any) => `${element.Bearing_No}` },
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
      columnDef: 'Fatigue_load_limit_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_limit_kN_Cu}`,
    },

    {
      columnDef: 'Limiting_speeds_min_Oil_lub',
      header: 'Oil lub',
      cell: (element: any) => `${element.Limiting_speeds_min_Oil_lub}`,
    },
    { columnDef: 'Refer_Mass_kg', header: '', cell: (element: any) => `${element.Refer_Mass_kg}` },
    {
      columnDef: 'Washer_dimensions_mm_d__D',
      header: 'd',
      cell: (element: any) => `${element.Washer_dimensions_mm_d__D}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_d_d1',
      header: 'D, d1',
      cell: (element: any) => `${element.Washer_dimensions_mm_d_d1}`,
    },
    {
      columnDef: 'Washer_dimensions_mm_d__D1',
      header: 'D1',
      cell: (element: any) => `${element.Washer_dimensions_mm_d__D1}`,
    },
    { columnDef: 'Thin_h1_mm', header: 'h1 (mm)', cell: (element: any) => `${element.Thin_h1_mm}` },
    { columnDef: 'Thin_washer_No', header: 'Washer No', cell: (element: any) => `${element.Thin_washer_No}` },
    {
      columnDef: 'Thin_refer_mass_kg',
      header: '(Refer.)Mass (kg) ',
      cell: (element: any) => `${element.Thin_refer_mass_kg}`,
    },
    { columnDef: 'heavy_LS_h11_mm', header: 'h (h11) (mm) ', cell: (element: any) => `${element.heavy_LS_h11_mm}` },
    { columnDef: 'heavy_LS_a_mm', header: 'a (mm)', cell: (element: any) => `${element.heavy_LS_a_mm}` },
    { columnDef: 'heavy_LS_washer_No', header: 'Washer No.', cell: (element: any) => `${element.heavy_LS_washer_No}` },
    {
      columnDef: 'Heavy_LS_refer_mass_kg',
      header: '(Refer.) Mass (kg)',
      cell: (element: any) => `${element.Heavy_LS_refer_mass_kg}`,
    },
    { columnDef: 'Heavy_h_mm', header: 'h (mm)', cell: (element: any) => `${element.Heavy_h_mm}` },
    { columnDef: 'Heavy_r_min_mm', header: 'r min (mm)', cell: (element: any) => `${element.Heavy_r_min_mm}` },
    {
      columnDef: 'heavy_Washer_No_Shaft_piloted',
      header: 'Shaft piloted',
      cell: (element: any) => `${element.heavy_Washer_No_Shaft_piloted}`,
    },
    {
      columnDef: 'heavy_Washer_No_Housing_piloted',
      header: 'Housing piloted',
      cell: (element: any) => `${element.heavy_Washer_No_Housing_piloted}`,
    },
    {
      columnDef: 'heavy_Washer_No_Refer_Mass_kg',
      header: '',
      cell: (element: any) => `${element.heavy_Washer_No_Refer_Mass_kg} `,
    },
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

  GetNeedlerollerthrustmetricseries() {
    this.service.GetNeedlerollerthrustmetricseries().subscribe((res) => {
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
    this.GetNeedlerollerthrustmetricseries();
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
