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
  selector: 'app-open-shieldedtype',
  templateUrl: './open-shieldedtype.component.html',
  styleUrls: ['./open-shieldedtype.component.scss'],
})
export class OpenShieldedtypeComponent implements OnInit {
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

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm__B1',
  // 'boundary_dimensions_mm_r_min',
  // 'boundary_dimensions_mm_r1_min',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_ZZ_2RU',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_2RD',
  // 'limiting_speeds_min_1Grease_lub_Facto_Oil_lub_2RS',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_Z',
  // 'bearing_No_open',
  // 'bearing_No_Shileded',
  // 'bearing_No_Non_contact_sealed',
  // 'bearing_No_Extremely_light_shielded',
  // 'bearing_No_contact_sealed',
  // 'mounting_dimensions_mm_d_a_min',
  // 'mounting_dimensions_mm_Da_max',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_g'
  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm__B1',

  // 'boundary_dimensions_mm_r',
  // 'boundary_dimensions_mm_r1',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',

  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_ZZ_2RU',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_2RD',
  // 'limiting_speeds_min_1Grease_lub_Facto_Oil_lub_2RS',
  // 'limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_Z',
  // 'bearing_No_open',
  // 'bearing_No_Shileded',
  // 'bearing_No_Non_contact_sealed',
  // 'bearing_No_Extremely_light_shielded',
  // 'bearing_No_contact_sealed',
  // 'mounting_dimensions_mm_d_a_min',

  // 'mounting_dimensions_mm_Da_max',

  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_g',

  // ];

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
      columnDef: 'boundary_dimensions_mm_r_min',
      header: 'r 1) min',
      cell: (element: any) => `${element.boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'boundary_dimensions_mm_r1_min',
      header: 'r1 1) min',
      cell: (element: any) => `${element.boundary_dimensions_mm_r1_min}`,
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
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_ZZ_2RU',
      header: '[OpenZZ, 2RU]',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_ZZ_2RU}`,
    },

    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_2RD',
      header: '(2RD)',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_2RD}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1Grease_lub_Facto_Oil_lub_2RS',
      header: '(2RS)',
      cell: (element: any) => `${element.Limiting_speeds_min_1Grease_lub_Facto_Oil_lub_2RS}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_Z',
      header: '[Open Z]',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Factor_Oil_lub_Open_Z}`,
    },
    { columnDef: 'Bearing_No_open', header: 'Open', cell: (element: any) => `${element.Bearing_No_open}` },
    { columnDef: 'Bearing_No_Shileded', header: 'Shielded', cell: (element: any) => `${element.Bearing_No_Shileded}` },
    {
      columnDef: 'Bearing_No_Non_contact_sealed',
      header: 'Non-contact sealed',
      cell: (element: any) => `${element.Bearing_No_Non_contact_sealed}`,
    },
    {
      columnDef: 'Bearing_No_Extremely_light_shielded',
      header: 'Extremely light shielded',
      cell: (element: any) => `${element.Bearing_No_Extremely_light_shielded}`,
    },
    {
      columnDef: 'Bearing_No_contact_sealed',
      header: 'Contact sealed',
      cell: (element: any) => `${element.Bearing_No_contact_sealed}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_d_a_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_d_a_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_Da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_ra_max}`,
    },
    { columnDef: 'Refer_Mass_g', header: '', cell: (element: any) => `${element.Refer_Mass_g}` },
    //  { columnDef: 'mounting_dimension_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimension_mm_ra_max}`   },
    //  { columnDef: 'mounting_dimension_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimension_mm_rb_max}`   },
    //  { columnDef: 'refer_Mass_kg',   header: '', cell: (element: any) => `${element.refer_Mass_kg}`   },
    //  { columnDef: 'refer_Bearing_No',   header: '', cell: (element: any) => `${element.refer_Bearing_No}`   },
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
  GetExtrasmallminiatureballbearings() {
    // this.loader.open();
    this.service.GetExtrasmallminiatureballbearings().subscribe((res) => {
      this.loader.close();
      console.log(res);
      this.dataSource.data = res;
      //  this.table_data = res;
      this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
        duration: 1000,
      });
    });
  }

  // GetDoublerowdeepgroove() {
  //   this.loader.open();
  //   this.service.GetDoublerowdeepgroove().subscribe((res) => {
  //     this.loader.close();
  //     console.log(res);
  //     this.dataSource.data = res;
  //     //  this.table_data = res;
  //     this.snackbar.open('Fetched Tasks Sucessfully', 'Done', {
  //       duration: 1000,
  //     });
  //   });
  // }

  ngOnInit() {
    this.GetExtrasmallminiatureballbearings();
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
