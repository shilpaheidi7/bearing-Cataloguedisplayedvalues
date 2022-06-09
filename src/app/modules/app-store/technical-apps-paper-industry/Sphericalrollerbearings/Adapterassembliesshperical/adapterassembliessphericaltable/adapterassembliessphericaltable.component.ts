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
  selector: 'app-adapterassembliessphericaltable',
  templateUrl: './adapterassembliessphericaltable.component.html',
  styleUrls: ['./adapterassembliessphericaltable.component.scss'],
})
export class AdapterassembliessphericaltableComponent implements OnInit {
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
      columnDef: 'Boundarydimensions_mm_d1',
      header: 'd1',
      cell: (element: any) => `${element.Boundarydimensions_mm_d1}`,
    },
    {
      columnDef: 'Boundarydimensions_mm_B1',
      header: 'B1',
      cell: (element: any) => `${element.Boundarydimensions_mm_B1}`,
    },
    {
      columnDef: 'Boundarydimensions_mm_d2',
      header: 'd2',
      cell: (element: any) => `${element.Boundarydimensions_mm_d2}`,
    },
    {
      columnDef: 'Boundarydimensions_mm_B2',
      header: 'B2',
      cell: (element: any) => `${element.Boundarydimensions_mm_B2}`,
    },
    {
      columnDef: 'Boundarydimensions_mm_B3',
      header: 'B3',
      cell: (element: any) => `${element.Boundarydimensions_mm_B3}`,
    },
    {
      columnDef: 'Brg_bore_d_mm',
      header: 'd(mm)',
      cell: (element: any) => `${element.Brg_bore_d_mm}`,
    },
    {
      columnDef: 'Designations_Bearings_adapter_assy',
      header: 'Bearing.+adapter ass y ',
      cell: (element: any) => `${element.Designations_Bearings_adapter_assy}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_A_min',
      header: 'A min ',
      cell: (element: any) => `${element.Mounting_dimensions_mm_A_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_K_min',
      header: 'K min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_K_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_de_min',
      header: 'de min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_de_min}`,
    },
    {
      columnDef: 'Mounting_dimensions_mm_min',
      header: 'b min',
      cell: (element: any) => `${element.Mounting_dimensions_mm_min}`,
    },

    {
      columnDef: 'Mass_Brg_adapter_assy_kg',
      header: 'Brg.+adapter ass y (kg)',
      cell: (element: any) => `${element.Mass_Brg_adapter_assy_kg}`,
    },
    {
      columnDef: 'Refer_Adapter_Locknut_sleeve_No',
      header: 'Adapter sleeve No',
      cell: (element: any) => `${element.Refer_Adapter_Locknut_sleeve_No}`,
    },
    {
      columnDef: 'Locknut_No',
      header: 'Locknut No.',
      cell: (element: any) => `${element.Locknut_No}`,
    },
    // { columnDef: 'mounting_dimensions_mm__Da_min',   header: 'Da min', cell: (element: any) => `${element.mounting_dimensions_mm__Da_min}`   },
    // { columnDef: 'mounting_dimensions_mm_ra_max',   header: 'ra max', cell: (element: any) => `${element.mounting_dimensions_mm_ra_max}`   },
    //  { columnDef: 'con_stant_e',   header: 'e', cell: (element: any) => `${element.con_stant_e}`   },
    //  { columnDef: 'axial_load_factors_Y1',   header: 'Y1 ', cell: (element: any) => `${element.axial_load_factors_Y1}`   },
    //  { columnDef: 'axial_load_factors_Y2',   header: 'Y2', cell: (element: any) => `${element.axial_load_factors_Y2}`   },
    //  {  columnDef: 'axial_load_factors_Y0',   header: 'Y0 ', cell: (element: any) => `${element.axial_load_factors_Y0}`   },
    //  { columnDef: 'refer_Mass_kg_Cylindrical_bore',   header: 'Cylindrical bore', cell: (element: any) => `${element.refer_Mass_kg_Cylindrical_bore}`   },
    //  { columnDef: 'refer_Mass_kg_Tapered_bore',   header: 'Tapered bore', cell: (element: any) => `${element.refer_Mass_kg_Tapered_bore}`   },
    //  { columnDef: 'axial_load_factors_Y1',   header: 'Y1', cell: (element: any) => `${element.axial_load_factors_Y1}`   },
    //  { columnDef: 'axial_load_factors_Y0',   header: 'Y0', cell: (element: any) => `${element.axial_load_factors_Y0}`   },
    //  { columnDef: 'refer_Mass_kg_Inner_ring',   header: 'Inner ring', cell: (element: any) => `${element.refer_Mass_kg_Inner_ring}`   },
    //  { columnDef: 'refer_Mass_kg_Outer_ring',   header: 'Outer ring', cell: (element: any) => `${element.refer_Mass_kg_Outer_ring}`   },
    //  { columnDef: 'mounting_dimensions_mm_rb_max',   header: 'rb max', cell: (element: any) => `${element.mounting_dimensions_mm_rb_max}`   },
    //  { columnDef: ' refer_Mass_NU_N_kg ',   header: '', cell: (element: any) => `${element. refer_Mass_NU_N_kg} `   },
  ];

  displayedColumns = this.columns.map((c) => c.columnDef);

  // displayedColumns: string[] = [

  //   'boundary_dimensions_mm_d1',
  //   'boundary_dimensions_mm__B1',
  //   'boundary_dimensions_mm_d2',
  //   'boundary_dimensions_mm__B2',
  //   'boundary_dimensions_mm__B3',
  //   'brg_bore_d_mm',
  //   'designations_Bearing_adapter_ass_y',
  //   'mounting_dimensions_mm_A_min',
  //   'mounting_dimensions_mm_K_min',
  //   'mounting_dimensions_mm_de_min',
  //   'mounting_dimensions_mm_b_min',
  //   'mass_Brg_adapter_ass_y_kg',
  //   'refer_Adapter_sleeve_No',
  //   'refer_Adapter_Locknut_No'

  // 'boundary_dimensions_mm_d1',
  // 'boundary_dimensions_mm__B1',
  // 'boundary_dimensions_mm_d2',
  // 'boundary_dimensions_mm__B2',
  // 'boundary_dimensions_mm__B3',
  // 'brg_bore_d_mm',
  // 'designations_Bearing_adapter_ass_y',
  // 'mounting_dimensions_mm_A_min',
  // 'mounting_dimensions_mm_K_min',
  // 'mounting_dimensions_mm_de_min',
  // 'mounting_dimensions_mm_b_min',
  // 'mass_Brg_adapter_ass_y_kg',
  // 'refer_Adapter_Locknut_sleeve_No',

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

  GetAdapterassembliesshperical() {
    //
    this.service.GetAdapterassembliesshperical().subscribe((res) => {
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
    this.GetAdapterassembliesshperical();
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
