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
  selector: 'app-contactdoublerow',
  templateUrl: './contactdoublerow.component.html',
  styleUrls: ['./contactdoublerow.component.scss'],
})
export class ContactdoublerowComponent implements OnInit {
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
  // 'boundary_dimensions_mm_r_min',
  // 'basic_load_ratings_KN_Open_Cr',
  // 'basic_load_ratings_KN_Open_C0r',
  // 'basic_load_ratings_KN_Shielded_sealed_Cr',
  // 'basic_load_ratings_KN_Shielded_sealed_C0r',
  // 'fatigue_load_limits_kN_Cu_Open',
  // 'fatigue_load_limits_kN_Cu_Shielded_sealed',
  // 'limiting_speeds_Grease_lub_Open_Z_ZZ',
  // 'limiting_speeds_Grease_lub_Open_Rs_2RS',
  // 'limiting_speeds_Oil_lub_Open_Z',
  // 'bearing_No_Open',
  // 'bearing_No_Shielded',
  // 'bearing_No_Sealed',
  // 'load_center_spread_mm_Open_a',
  // 'mounting_dimensions_mm_da_min',
  // 'mounting_dimensions_mm_da_max',
  // 'mounting_dimensions_mm__Da_max',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_kg'

  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__B',
  // 'boundary_dimensions_mm_r_min',
  // 'basic_load_ratings_KN_Open_Cr_C0r',
  // //"column6": "",
  // 'basic_load_ratings_KN_Shielded_sealed_Cr_C0r',
  // //"column8": "",
  // 'fatigue_load_limits_kN_Cu_Open',
  // 'fatigue_load_limits_kN_Cu_Shielded_sealed',
  // 'limiting_speeds_Grease_lub_Open_RS_2RS_Z_ZZ',
  // //"column12": "",
  // 'min_1_Oil_lub_Open_Z',
  // 'bearing_No_Open',
  // 'bearing_No_Shielded',
  // 'bearing_No_Sealed',
  // 'load_center_spread_mm_Open_a',
  // 'mounting_dimensions_mm_max',
  // 'mounting_dimensions_mm__Da_max',
  // 'mounting_dimensions_mm_ra_max',
  // 'refer_Mass_kg'
  //
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
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_Open_Cr',
      header: 'Open Cr',
      cell: (element: any) => `${element.Basic_load_ratings_KN_Open_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_Open_C0r',
      header: 'Open C0r',
      cell: (element: any) => `${element.Basic_load_ratings_KN_Open_C0r}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_Shielded_sealed_Cr',
      header: 'Shielded/sealed Cr',
      cell: (element: any) => `${element.Basic_load_ratings_KN_Shielded_sealed_Cr}`,
    },
    {
      columnDef: 'Basic_load_ratings_KN_Shielded_sealed_C0r',
      header: 'Shielded/sealed C0r',
      cell: (element: any) => `${element.Basic_load_ratings_KN_Shielded_sealed_C0r}`,
    },
    {
      columnDef: 'Fatigue_load_limits_kN_Cu_Open',
      header: '(Open) Cu',
      cell: (element: any) => `${element.Fatigue_load_limits_kN_Cu_Open}`,
    },
    {
      columnDef: 'Fatigue_load_limits_kN_Cu_Shielded_sealed',
      header: '(Shielded/sealed) Cu',
      cell: (element: any) => `${element.Fatigue_load_limits_kN_Cu_Shielded_sealed}`,
    },
    {
      columnDef: 'Limiting_speeds_Grease_lub_Open_Z_ZZ',
      header: '[Open Z, ZZ]',
      cell: (element: any) => `${element.Limiting_speeds_Grease_lub_Open_Z_ZZ}`,
    },

    {
      columnDef: 'Limiting_speeds_Grease_lub_Open_Rs_2RS',
      header: '(RS, 2RS)',
      cell: (element: any) => `${element.Limiting_speeds_Grease_lub_Open_Rs_2RS}`,
    },
    {
      columnDef: 'Limiting_speeds_Oil_lub_Open_Z',
      header: 'Open Z',
      cell: (element: any) => `${element.Limiting_speeds_Oil_lub_Open_Z}`,
    },
    { columnDef: 'Bearing_No_Open', header: 'Open', cell: (element: any) => `${element.Bearing_No_Open}` },
    { columnDef: 'Bearing_No_Shielded', header: 'Shielded', cell: (element: any) => `${element.Bearing_No_Shielded}` },
    { columnDef: 'Bearing_No_Sealed', header: 'Sealed', cell: (element: any) => `${element.Bearing_No_Sealed}` },
    {
      columnDef: 'Load_center_spread_mm_Open_a',
      header: 'Open a',
      cell: (element: any) => `${element.Load_center_spread_mm_Open_a}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_min}`,
    },
    //  {  columnDef: 'load_center_spread_mm_a_2',   header: 'a2', cell: (element: any) => `${element.load_center_spread_mm_a_2}`   },
    //  { columnDef: 'mounting_dimensions_mm_da_min',   header: 'da min', cell: (element: any) => `${element.mounting_dimensions_mm_da_min}`   },
    {
      columnDef: 'Mounting_dimensions_mm_da_max',
      header: 'da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm__Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.Mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Mounting_dimensions_mm_ra_max}`,
    },
    { columnDef: 'Refer_Mass_Kg', header: '', cell: (element: any) => `${element.Refer_Mass_Kg}` },
    //  { columnDef: 'mounting_dimensions_mm__rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm__rb_max}`   },
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
  GetDoublerowcontactball() {
    this.service.GetDoublerowcontactball().subscribe((res) => {
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
    this.GetDoublerowcontactball();
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
