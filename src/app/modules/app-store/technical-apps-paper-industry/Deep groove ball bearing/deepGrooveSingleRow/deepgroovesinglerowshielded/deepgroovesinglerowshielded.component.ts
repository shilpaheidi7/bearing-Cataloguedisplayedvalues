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
  selector: 'app-deepgroovesinglerowshielded',
  templateUrl: './deepgroovesinglerowshielded.component.html',
  styleUrls: ['./deepgroovesinglerowshielded.component.scss'],
})
export class DeepgroovesinglerowshieldedComponent implements OnInit {
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
    { columnDef: 'Boundarydimensions_mm_d', header: 'd', cell: (element: any) => `${element.Boundarydimensions_mm_d}` },
    {
      columnDef: 'Boundarydimensions_mm__D',
      header: 'D',
      cell: (element: any) => `${element.Boundarydimensions_mm__D}`,
    },
    {
      columnDef: 'Boundarydimensions_mm__B',
      header: 'B',
      cell: (element: any) => `${element.Boundarydimensions_mm__B}`,
    },
    {
      columnDef: 'Boundarydimensions_mm_r',
      header: 'r min.',
      cell: (element: any) => `${element.Boundarydimensions_mm_r}`,
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
    { columnDef: 'Factor_f0', header: 'f 0', cell: (element: any) => `${element.Factor_f0}` },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Z_ZZ_RU_2RU',
      header: '[Z,ZZ,RU, 2RU]',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Z_ZZ_RU_2RU}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_RD_2RD',
      header: 'Grease lub.(RD, 2RD)',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_RD_2RD}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_RS_2RS',
      header: '(RS, 2RS)',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_RS_2RS}`,
    },
    {
      columnDef: 'Limiting_speeds_min_1_Grease_lub_Oil_lub_Z',
      header: 'Oil lub.(Z)',
      cell: (element: any) => `${element.Limiting_speeds_min_1_Grease_lub_Oil_lub_Z}`,
    },
    { columnDef: 'Bearing_No_Shielded', header: 'Shielded', cell: (element: any) => `${element.Bearing_No_Shielded}` },
    {
      columnDef: 'Bearing_No_Non_contact_sealed',
      header: 'Non-contact sealed',
      cell: (element: any) => `${element.Bearing_No_Non_contact_sealed}`,
    },
    {
      columnDef: 'Bearing_No_Extremely_light_sealed',
      header: 'Extremely light contact sealed',
      cell: (element: any) => `${element.Bearing_No_Extremely_light_sealed}`,
    },
    {
      columnDef: 'Bearing_No_Contact_sealed',
      header: 'Contact sealed',
      cell: (element: any) => `${element.Bearing_No_Contact_sealed}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm__da_max',
      header: 'da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm__da_max}`,
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
    { columnDef: 'Refer_Mass_Open_type_kg', header: '', cell: (element: any) => `${element.Refer_Mass_Open_type_kg}` },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [
  // 'boundarydimensions_mm_d',
  // 'boundarydimensions_mm__D',
  // 'boundarydimensions_mm__B',
  // 'boundarydimensions_mm_r',
  // 'basic_load_ratings_kN_Cr',
  // 'basic_load_ratings_kN_C0r',
  // 'fatigue_load_limit_kN_Cu',
  // 'factor_f0',
  // 'limiting_speeds_min_1_Grease_lub_Z_ZZ_RU_2RU',
  // 'limiting_speeds_min_1_Grease_lub_RD_2RD',
  // 'limiting_speeds_min_1_Grease_lub_RS_2RS',
  // 'limiting_speeds_min_1_Grease_lub_Oil_lub_Z',
  // 'bearing_No_Shielded',
  // 'bearing_No_Non_contact_sealed',
  // 'bearing_No_Extremely_light_sealed',
  // 'bearing_No_Contact_sealed',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm__da_max',
  // 'mounting_dimensions_mm_Da_max',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_Open_type_kg',

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

  GetSinglerowsealedtype() {
    // this.loader.open();
    this.service.GetSinglerowsealedtype().subscribe((res) => {
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
    this.GetSinglerowsealedtype();
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
