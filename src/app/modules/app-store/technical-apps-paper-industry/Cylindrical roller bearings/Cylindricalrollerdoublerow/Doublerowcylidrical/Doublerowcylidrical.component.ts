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
  selector: 'app-Doublerowcylidrical',
  templateUrl: './Doublerowcylidrical.component.html',
  styleUrls: ['./Doublerowcylidrical.component.scss'],
})
export class DoublerowcylidricalComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm__B',
      header: 'B',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Fw',
      header: ' Fw',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Fw}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_Ew',
      header: 'Ew',
      cell: (element: any) => `${element.Boundary_dimensions_mm_Ew}`,
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
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_limit_kN_Cu}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub',
      header: 'Grease lub',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_oil_lub',
      header: 'Oil lub.',
      cell: (element: any) => `${element.Limiting_speeds_min_1_oil_lub}`,
    },

    {
      columnDef: 'Bearing_No_NN_Cylindrical_bore',
      header: 'NN Cylindrical bore',
      cell: (element: any) => `${element.Bearing_No_NN_Cylindrical_bore}`,
    },
    {
      columnDef: 'Bearing_No_NN_Tapered_bore',
      header: 'NN Tapered bore',
      cell: (element: any) => `${element.Bearing_No_NN_Tapered_bore}`,
    },
    {
      columnDef: 'bearing_No_NNU_Cylindrical_bore',
      header: 'NNU Cylindrical bore ',
      cell: (element: any) => `${element.bearing_No_NNU_Cylindrical_bore}`,
    },
    {
      columnDef: 'Bearing_No_NNUl_Tapered_bore',
      header: 'NNU Tapered bore',
      cell: (element: any) => `${element.Bearing_No_NNUl_Tapered_bore}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_da_max',
      header: 'da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_db_min',
      header: 'db min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_db_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_db_max',
      header: 'Da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_db_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm__Da_max',
      header: 'Da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm__ra_min',
      header: 'ra max',
      cell: (element: any) => `${element.Mounting_dimensions_mm__ra_min}`,
    },
    {
      columnDef: 'Refer_Cylindrical_bore',
      header: 'Cylindrical bore',
      cell: (element: any) => `${element.Refer_Cylindrical_bore}`,
    },
    {
      columnDef: 'Mass_kg_Tapered_bore',
      header: 'Tapered bore',
      cell: (element: any) => `${element.Mass_kg_Tapered_bore}`,
    },
    //  { columnDef: 'mounting_dimensions_mm__Db_max',   header: 'Db max', cell: (element: any) => `${element.mounting_dimensions_mm__Db_max}`   },
    //  { columnDef: 'mounting_dimensions_mm__Db_min',   header: 'Db min', cell: (element: any) => `${element.mounting_dimensions_mm__Db_min}`   },
    //  { columnDef: 'mounting_dimensions_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`   },
    //  { columnDef: 'mounting_dimensions_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`   },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__B',
  //   'boundary_dimensions_mm_r_min',
  //   'boundary_dimensions_mm_Fw',
  //   'boundary_dimensions_mm_Ew',
  //   'basic_load_ratings_kN_Cr',
  //   'basic_load_ratings_kN_C0r',
  //   'fatigue_load_limit_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_oil_lub',
  //   'bearing_No_NN_Cylindrical_bore',
  //   'bearing_No_NN_Tapered_bore',
  //   'bearing_No_NNU_Cylindrical_bore',
  //   'bearing_No_NNUl_Tapered_bore',
  //   'mounting_dimensions_mm_da_min',
  //   'mounting_dimensions_mm_da_max',
  //   'mounting_dimensions_mm_db_min',
  //   'mounting_dimensions_mm__Da_min',
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm_ra_max',
  //   'refer_Cylindrical_bore',
  //   'mass_kg_Tapered_bore'

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm_r_min',
  // 'boundary_dimensions_mm_Fw',
  // 'boundary_dimensions_mm_Ew',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',
  // 'limiting_speeds_min_1_Grease_lub',
  // 'limiting_speeds_min_1_oil_lub',
  // 'bearing_No_NN_Cylindrical_bore',
  // 'bearing_No_NN_Tapered_bore',
  // 'bearing_No_NNU_Cylindrical_bore',
  // 'bearing_No_NNUl_Tapered_bore',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm_da_max',
  // 'mounting_dimensions_mm_db_min',
  // 'mounting_dimensions_mm_db_max',
  // 'mounting_dimensions_mm__Da_max',
  // 'mounting_dimensions_mm__Da_min',
  // 'refer_Cylindrical_bore',
  // 'mass_kg_Tapered_bore'

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

  GetDoublerowcylidrical() {
    // this.loader.open();
    this.service.GetDoublerowcylidrical().subscribe((res) => {
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
    this.GetDoublerowcylidrical();
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
