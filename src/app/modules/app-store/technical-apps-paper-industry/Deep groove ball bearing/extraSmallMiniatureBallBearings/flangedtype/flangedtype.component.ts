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
  selector: 'app-flangedtype',
  templateUrl: './flangedtype.component.html',
  styleUrls: ['./flangedtype.component.scss'],
})
export class FlangedtypeComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm__B1',
      header: 'B1',
      cell: (element: any) => `${element.Boundary_dimensions_mm__B1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r 1) min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_1min',
      header: 'r1 1) min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_1min}`,
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
      columnDef: 'Fatigue_load_limit_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatigue_load_limit_kN_Cu}`,
    },
    { columnDef: 'Factor_f0', header: 'f0', cell: (element: any) => `${element.Factor_f0}` },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Oil_lub_Open_ZZ_ZZX',
      header: 'Grease lub.[Open ZZ, ZZX]',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Oil_lub_Open_ZZ_ZZX}`,
    },

    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Oil_lub_Open_Z_ZX',
      header: 'Oil lub.(Open Z, ZX)',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Oil_lub_Open_Z_ZX}`,
    },
    { columnDef: 'Bearing_No_Open', header: 'Open', cell: (element: any) => `${element.Bearing_No_Open}` },
    { columnDef: 'Bearing_No_Shielded', header: 'Shielded', cell: (element: any) => `${element.Bearing_No_Shielded}` },
    {
      columnDef: 'Dimensions_of_flange_mm__D1',
      header: 'D1',
      cell: (element: any) => `${element.Dimensions_of_flange_mm__D1}`,
    },
    {
      columnDef: 'Dimensions_of_flange_mm__D2',
      header: 'D2',
      cell: (element: any) => `${element.Dimensions_of_flange_mm__D2}`,
    },
    {
      columnDef: 'Dimensions_of_flange_mm__C1',
      header: 'C1',
      cell: (element: any) => `${element.Dimensions_of_flange_mm__C1}`,
    },
    {
      columnDef: 'Dimensions_of_flange_mm_c2',
      header: 'C2',
      cell: (element: any) => `${element.Dimensions_of_flange_mm_c2}`,
    },
    {
      columnDef: 'dimensions_of_flange_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.dimensions_of_flange_mm_da_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_ra_max}`,
    },
    { columnDef: 'Refer_Mass_g', header: '', cell: (element: any) => `${element.Refer_Mass_g}` },
    //  { columnDef: 'mounting_dimensions_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`   },
    //  { columnDef: 'refer_Mass_g',   header: '', cell: (element: any) => `${element.refer_Mass_g}`   },
    //  { columnDef: 'mounting_dimension_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimension_mm_ra_max}`   },
    //  { columnDef: 'mounting_dimension_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimension_mm_rb_max}`   },
    //  { columnDef: 'refer_Mass_kg',   header: '', cell: (element: any) => `${element.refer_Mass_kg}`   },
    //  { columnDef: 'refer_Bearing_No',   header: '', cell: (element: any) => `${element.refer_Bearing_No}`   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm__B1',
  // 'boundary_dimensions_mm_r_min',
  // 'boundary_dimensions_mm_r_1min',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub_Oil_lub_Open_ZZ_ZZX',
  // 'limiting_speeds_min_1_Grease_lub_Oil_lub_Open_Z_ZX',
  // 'bearing_No_Open',
  // //"column14": "",
  // 'bearing_No_Shielded',
  // //"column16": "",
  // 'dimensions_of_flange_mm__D1',
  // 'dimensions_of_flange_mm__D2',
  // 'dimensions_of_flange_mm__C1',
  // 'dimensions_of_flange_mm_c2',
  // 'dimensions_of_flange_mm_da_min',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_g'
  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm__B1',
  // 'boundary_dimensions_mm_r_min',
  // 'boundary_dimensions_mm_r_1min',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub_Oil_lub_Open_ZZ_ZZX',
  // 'limiting_speeds_min_1_Grease_lub_Oil_lub_Open_Z_ZX',
  // 'bearing_No_Open',
  // // 'column14',
  // 'bearing_No_Shielded',
  // // 'column16',
  // 'dimensions_of_flange_mm__D1',
  // 'dimensions_of_flange_mm__D2',
  // 'dimensions_of_flange_mm__C1',
  // 'dimensions_of_flange_mm_c2',
  // 'dimensions_of_flange_mm_da',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_g',
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
  GetFlangedtype() {
    this.loader.open();
    this.service.GetFlangedtype().subscribe((res) => {
      //  this.loader.close();
      console.log(res);
      this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
    });
  }

  ngOnInit() {
    this.GetFlangedtype();
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
