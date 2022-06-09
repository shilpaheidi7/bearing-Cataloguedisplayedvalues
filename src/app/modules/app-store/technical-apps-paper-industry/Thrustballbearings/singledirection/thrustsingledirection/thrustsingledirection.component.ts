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
  selector: 'app-thrustsingledirection',
  templateUrl: './thrustsingledirection.component.html',
  styleUrls: ['./thrustsingledirection.component.scss'],
})
export class ThrustsingledirectionComponent implements OnInit {
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
      columnDef: 'Boundary_dimensions_mm__T1',
      header: 'T1  ',
      cell: (element: any) => `${element.Boundary_dimensions_mm__T1}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm__T2',
      header: 'T2 ',
      cell: (element: any) => `${element.Boundary_dimensions_mm__T2}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_r_min',
      header: 'r min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_r_min}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_Ca',
      header: 'Ca  ',
      cell: (element: any) => `${element.Basic_load_ratings_kN_Ca}`,
    },
    {
      columnDef: 'Basic_load_ratings_kN_C0a',
      header: 'C0a ',
      cell: (element: any) => `${element.Basic_load_ratings_kN_C0a}`,
    },
    {
      columnDef: 'Fatique_load_limits_kN_Cu',
      header: 'Cu',
      cell: (element: any) => `${element.Fatique_load_limits_kN_Cu}`,
    },
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

    {
      columnDef: 'Bearing_No_With_flat_back_faces',
      header: 'With flat back faces',
      cell: (element: any) => `${element.Bearing_No_With_flat_back_faces}`,
    },
    {
      columnDef: 'Bearing_No_With_spherical_back_face',
      header: 'With spherical back face',
      cell: (element: any) => `${element.Bearing_No_With_spherical_back_face}`,
    },
    {
      columnDef: 'Bearing_No_With_aligning_seat_race',
      header: 'With aligning seat race',
      cell: (element: any) => `${element.Bearing_No_With_aligning_seat_race}`,
    },
    { columnDef: 'Dimensions_mm_d1_max', header: 'd1 max', cell: (element: any) => `${element.Dimensions_mm_d1_max}` },
    {
      columnDef: 'dimensions_mm__D1_min',
      header: 'D1 min',
      cell: (element: any) => `${element.dimensions_mm__D1_min}`,
    },
    { columnDef: 'dimensions_mm__D2', header: 'D2', cell: (element: any) => `${element.dimensions_mm__D2}` },
    { columnDef: 'dimensions_mm__D3', header: 'D3 ', cell: (element: any) => `${element.dimensions_mm__D3}` },
    { columnDef: 'dimensions_mm__A', header: 'A', cell: (element: any) => `${element.dimensions_mm__A}` },
    { columnDef: 'dimensions_mm__R', header: 'R ', cell: (element: any) => `${element.dimensions_mm__R}` },
    { columnDef: 'dimensions_mm__C', header: 'C', cell: (element: any) => `${element.dimensions_mm__C}` },
    {
      columnDef: 'Boundary_dimensions_mm_da_min',
      header: 'da min',
      cell: (element: any) => `${element.Boundary_dimensions_mm_da_min}`,
    },
    {
      columnDef: 'mounting_dimensions_mm__Da_max',
      header: 'Da max',
      cell: (element: any) => `${element.mounting_dimensions_mm__Da_max}`,
    },
    {
      columnDef: 'Boundary_dimensions_mm_ra_max',
      header: 'ra max',
      cell: (element: any) => `${element.Boundary_dimensions_mm_ra_max}`,
    },
    {
      columnDef: 'Refer_Mass_kg_With_flat_back_faces_seat_race',
      header: 'With flat back faces',
      cell: (element: any) => `${element.Refer_Mass_kg_With_flat_back_faces_seat_race}`,
    },
    {
      columnDef: 'Refer_Mass_kg_With_spherical_back_faces',
      header: 'With spherical back face',
      cell: (element: any) => `${element.Refer_Mass_kg_With_spherical_back_faces}`,
    },
    {
      columnDef: 'Refer_Mass_kg_With_aligning_seat_race',
      header: 'With aligning seat race',
      cell: (element: any) => `${element.Refer_Mass_kg_With_aligning_seat_race}`,
    },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d',
  //   'boundary_dimensions_mm__D',
  //   'boundary_dimensions_mm__T',
  //   'boundary_dimensions_mm__T1',
  //   'boundary_dimensions_mm__T2',
  //   'boundary_dimensions_mm_r_min',
  //   'basic_load_ratings_kN_Ca',
  //   'basic_load_ratings_kN_C0a',
  //   'fatique_load_limits_kN_Cu',
  //   'limiting_speeds_min_1_Grease_lub',
  //   'limiting_speeds_min_1_Oil_lub',
  //   'bearing_No_With_flat_back_faces',
  //   'bearing_No_With_spherical_back_face',
  //   'bearing_No_With_aligning_seat_race',
  //   'dimensions_mm_d1_max',
  //   'dimensions_mm__D1_min',
  //   'dimensions_mm__D2',
  //   'dimensions_mm__D3',
  //   'dimensions_mm__A',
  //   'dimensions_mm__R',
  //   'dimensions_mm__C',
  //   'mounting_dimensions_mm_da_min' ,
  //   'mounting_dimensions_mm__Da_max',
  //   'mounting_dimensions_mm_ra_max',
  //   'refer_Mass_kg_With_flat_back_faces_seat_race',
  //   'refer_Mass_kg_With_spherical_back_faces',
  //   'refer_Mass_kg_With_aligning_seat_race'
  // 'boundary_dimensions_mm_d',
  // 'boundary_dimensions_mm__D',
  // 'boundary_dimensions_mm__T',
  // 'boundary_dimensions_mm__T1',
  // 'boundary_dimensions_mm__T2',
  // 'boundary_dimensions_mm_r_min',
  // 'basic_load_ratings_kN_Ca',
  // 'basic_load_ratings_kN_C0a',
  // 'basic_load_limits_kN_Cu',
  // 'limiting_speeds_min_1_Grease_lub',
  // 'limiting_speeds_min_1_Oil_lub',
  // 'bearing_No_With_flat_back_faces',
  // 'bearing_No_With_spherical_back_face',
  // 'bearing_No_With_aligning_seat_race',
  // 'boundary_dimensions_mm_d1_max',
  // 'boundary_dimensions_mm__D2_min',
  // 'boundary_dimensions_mm__D2',
  // 'boundary_dimensions_mm__D3',
  // 'boundary_dimensions_mm__A',
  // 'boundary_dimensions_mm__R',
  // 'boundary_dimensions_mm__C',
  // 'boundary_dimensions_mm_da_min',
  // 'boundary_dimensions_mm__Da_max'
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

  GetSingledirctionthrust() {
    this.service.GetSingledirctionthrust().subscribe((res) => {
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
    this.GetSingledirctionthrust();
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
