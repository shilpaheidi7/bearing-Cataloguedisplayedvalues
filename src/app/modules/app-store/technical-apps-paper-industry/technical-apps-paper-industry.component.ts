import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UntilDestroy } from '@ngneat/until-destroy';
import { MenuItem } from 'primeng/api';

@UntilDestroy()
@Component({
  selector: 'app-technical-apps-paper-industry',
  templateUrl: './technical-apps-paper-industry.component.html',
  styleUrls: ['./technical-apps-paper-industry.component.scss'],
})
export class TechnicalAppsPaperIndustryComponent implements OnInit {
  @ViewChild('drawer', {
    static: true,
  })
  drawer!: MatSidenav;

  title!: string;

  filterTerm!: string;
  items: MenuItem[];

  constructor(private observer: BreakpointObserver) {}
  

  // menu: {}[] = [
  //   {
  //     link: 'deepGroove',
  //     menu: 'DEEP GROOVE BALL BEARING',
  //   },
  //   {
  //     link: 'angularContact',
  //     menu: 'ANGULAR CONTACT BALL BEARING',
  //   },
    // {
    //   link: 'adapterassembliesshperical',
    //   menu: 'ADAPTER ASSEMBLIES SHPERICAL',
    // },
    // {
    //   link: 'Combinedneedlemetricseries',
    //   menu: 'COMBINED NEEDLE METRIC SERIES',
    // },
    // {
    //   link: 'Adapterassemlies',
    //   menu: 'ADAPTER ASSEMBLIES ',
    // },
  //];
 
   getmenuName = (name: any) => {
    this.title = name;
  };

  sidenav() {
    this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
      if (res.matches) {
        this.drawer.mode = 'over';
        this.drawer.close();
      } else {
        this.drawer.mode = 'side';
        this.drawer.open();
      }
    });
  }

  sideOnclickClose() {
    if (this.drawer.mode == 'side') {
      this.drawer.open();
    } else {
      this.drawer.close();
     
    }
  }

  // activeListItem = () => {
  //   let buttons = document.querySelectorAll('a');
  //   buttons.forEach(button => {
  //     button.addEventListener('click', function () {
  //       buttons.forEach(btn => btn.classList.remove('active'));
  //       this.classList.add('active');
  //     });
  //   });
  // }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  // ngAfterViewInit() { }

  ngOnInit(): void {
    // this.drawer;
    this.sidenav();
    this.title = 'Technical Apps Paper Industry';

    // this.activeListItem();
    // this.JsonData.fetchData().subscribe((res: any) => {
    //   for (const i of res) {
    //     // this.controls = i.bearingCatlog;
    //     // console.log(i.technicalCalculation);
    //   }
    // });
    this.items = [
      {
        label: 'Deep groove ball bearing',
        icon: '',
        items: [
          {
            label: 'Single row',
            icon: '',
            routerLink: 'deepGroovesinglerow',
          },
          {
            label: 'Extra-small,miniature ball bearings',
            icon: '',
            routerLink:'deepGrooveextrasmallminiature'
          },
          {
            label: 'Double',
            icon: '',
            routerLink:'deepGroovedouble'
          },
        ],
      },
      {
        label: 'Angular contact ball bearing',
        icon: '',
        items: [
          {
            label: 'Single-row',
            icon: '',
            routerLink:'angularcontactsinglerow'
          },
          {
            label: 'Matched pair',
            icon: '',
            routerLink:'angularcontactmatchedpair'
          },
          {
            label: 'Double-row',
            icon: '',
            routerLink:'angularcontactdoublerow'
          },
          
        ],
      },
      {
        label: 'Self-aligning ball bearings',
        icon: '',
        items: [
          {
            label: 'Open type',
            icon: '',
            routerLink:'selfaligningopentype'
          },
          {
            label: 'Sealed type',
            icon: '',
            routerLink:'selfaligningsealedtype'
          },
          {
            label: 'Extended inner ring type',
            icon: '',
            routerLink:'selfaligningringtype'
          },
          {
            label: 'Adapter assemblies for self-aligning ball bearings',
            icon: '',
            routerLink:'selfaligningadapterassemblies'
          }
        
          
          //   items: [
          //     {
          //       label: 'Filter',
          //       icon: 'pi pi-fw pi-filter',
          //       items: [
          //         {
          //           label: 'Print',
          //           icon: 'pi pi-fw pi-print',
          //         },
          //       ],
          //     },
          //     {
          //       icon: 'pi pi-fw pi-bars',
          //       label: 'List',
          //     },
          //   ],
          // },
        ],
      },
      {
        label: 'Cylindrical roller bearings',
        icon: '',
        items: [
          {
            label: 'Singe-row',
            icon: '',
            routerLink:'cylindricalrollersinglerow',
            // items: [
            //   {
            //     label: 'Save',
            //     icon: 'pi pi-fw pi-calendar-plus',
            //   },
            //   {
            //     label: 'Delete',
            //     icon: 'pi pi-fw pi-calendar-minus',
            //   },
            // ],
          },
          {
            label: 'Thrust collars',
            icon: '',
            routerLink:'cylindricalrollerthrustcollars',
            // items: [
            //   {
            //     label: 'Double row',
            //     icon: '',
            //   },
            // ],
          },
          {
          label: 'Double row',
          icon: '',
          routerLink:'cylindricalrollerdoublerow'
          // items: [
          //   {
          //     label: 'Double row',
          //     icon: '',
          //   },
          // ],
        },
        ],
      },
      {
        label: 'Tapered roller bearings',
        icon: '',
        items: [
          {
            label: 'Single row',
            icon: '',
            routerLink:'taperedsinglerow',
            // items: [
            //     {
            //       label: 'Metric series',
            //       icon: '',
            //     },
            //     {
            //       label: 'Inch series',
            //       icon: '',
            //     },
            //   ],
             
          },
          {
            label: 'Double row',
            icon: '',
            routerLink:'tapereddoublerow',
            
            // // items: [
            // //   {
            // //     label: 'TDO type',
            // //     icon: '',
            // //   },
            // //   {
            // //     label: 'TDI type',
            // //     icon: '',
            // //   },
            // ],
           
          },
         
        ]
      },       
      {
        label: 'Spherical roller bearings',
        icon: '',
        items: [
          {
            label: 'Spherical roller bearings',
            icon: '',
            routerLink:'sphericalrollerbearings'
          },
          {
            label: 'Adapter assemblies for spherical roller bearings ',
            icon: '',
            routerLink:'adapterassembliesspherical'
          },
          {
            label: 'Withdrawal sleeves for spherical roller bearings  ',
            icon: '',
            routerLink:'withdrawalsleevesspherical'
          },
          
        ],
      },
      {
        label: 'Thrust ball bearings',
        icon: '',
        items: [
          {
            label: 'Single direction',
            icon: '',
            routerLink:'singledirection'
          },
          {
            label: 'Double direction',
            icon: '',
            routerLink:'doubledirection'
            
          },
        ]
      },
      {
        label: 'Spherical Thrust roller bearings',
        icon: '',
        routerLink:'sphericalthrustrollerbearings'

      },
      {
        label: 'Needle roller bearings',
        icon: '',
        items: [
          {
            label: 'Needle roller and cage assemblies',
            icon: '',
            routerLink:'needlerollerandcageassemblies'
          },
          {
            label: 'Drawn cup type',
            icon: '',
            routerLink:'drawncuptype'
          },
          {
            label: 'Heavy-duty type',
            icon: '',
            routerLink:'heavydutytype'
          },
          {
            label: 'Thrust',
            icon: '',
            routerLink:'Thrust'
          },
          {
            label: 'Combined',
            icon: '',
            routerLink:'combined'
          },
          {
            label: 'Inner ring',
            icon: '',
            routerLink:'innerring'
          },
          {
            label: 'Miniature one way clutches',
            icon: '',
            routerLink:'miniatureonewayclutches'
          },
        ]
      },
    ] 
     
  }
}
