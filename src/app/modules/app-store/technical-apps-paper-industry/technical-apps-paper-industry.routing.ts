import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularcontactdoublerowComponent } from './Angular contact ball bearing/Angularcontactdoublerow/Angularcontactdoublerow.component';
import { AngularcontactmatchedpairComponent } from './Angular contact ball bearing/Angularcontactmatchedpair/Angularcontactmatchedpair.component';
import { AngularcontactsinglerowComponent } from './Angular contact ball bearing/Angularcontactsinglerow/Angularcontactsinglerow.component';
import { AngularContactComponent } from './angular-contact/angular-contact.component';
import { CylindricalrollerdoublerowComponent } from './Cylindrical roller bearings/Cylindricalrollerdoublerow/Cylindricalrollerdoublerow.component';
import { CylindricalrollersinglerowComponent } from './Cylindrical roller bearings/Cylindricalrollersinglerow/Cylindricalrollersinglerow.component';
import { CylindricalrollerthrustcollarsComponent } from './Cylindrical roller bearings/Cylindricalrollerthrustcollars/Cylindricalrollerthrustcollars.component';
import { DeepGrooveDoubleComponent } from './Deep groove ball bearing/deepGrooveDouble/deepGrooveDouble.component';
import { DeepGrooveSingleRowComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepGrooveSingleRow.component';
import { DeepgroovesinglerowopenComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowopen/deepgroovesinglerowopen.component';
import { DeepgroovesinglerowshieldedComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowshielded/deepgroovesinglerowshielded.component';
import { DeepgroovesinglerowsnapringComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowsnapring/deepgroovesinglerowsnapring.component';
import { ExtraSmallMiniatureBallBearingsComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/extraSmallMiniatureBallBearings.component';
import { FlangedtypeComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/flangedtype/flangedtype.component';
import { OpenShieldedtypeComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/open-shieldedtype/open-shieldedtype.component';
import { DeepGrooveComponent } from './deep-groove/deep-groove.component';
import { CombinedComponent } from './needle roller bearings/combined/combined.component';
import { DrawncuptypeComponent } from './needle roller bearings/drawncuptype/drawncuptype.component';
import { HeavydutytypeComponent } from './needle roller bearings/heavydutytype/heavydutytype.component';
import { InnerringComponent } from './needle roller bearings/innerring/innerring.component';
import { MiniatureonewayclutchesComponent } from './needle roller bearings/Miniatureonewayclutches/Miniatureonewayclutches.component';
import { NeedlerollerandcageassembliesComponent } from './needle roller bearings/needlerollerandcageassemblies/needlerollerandcageassemblies.component';
import { ThrustComponent } from './needle roller bearings/thrust/thrust.component';
import { ResolveGuard } from './resolve/resolve.guard';
import { SelfAligningadapterassembliesComponent } from './Self-aligning ball bearings/Self-aligningadapterassemblies/Self-aligningadapterassemblies.component';
import { SelfAligningopentypeComponent } from './Self-aligning ball bearings/Self-aligningopentype/Self-aligningopentype.component';
import { SelfAligningringtypeComponent } from './Self-aligning ball bearings/Self-aligningringtype/Self-aligningringtype.component';
import { SelfAligningsealedtypeComponent } from './Self-aligning ball bearings/Self-aligningsealedtype/Self-aligningsealedtype.component';
import { AdapterassembliesshpericalComponent } from './Sphericalrollerbearings/Adapterassembliesshperical/Adapterassembliesshperical.component';
import { SphericalrollerbearingsComponent } from './Sphericalrollerbearings/Sphericalrollerbearings/Sphericalrollerbearings.component';
import { WithdrawalsleevessphericalComponent } from './Sphericalrollerbearings/Withdrawalsleevesspherical/Withdrawalsleevesspherical.component';
import { TapereddoublerowComponent } from './Tapered roller bearings/tapereddoublerow/tapereddoublerow.component';
import { TaperedsinglerowComponent } from './Tapered roller bearings/taperedsinglerow/taperedsinglerow.component';
import { TechnicalAppsPaperIndustryComponent } from './technical-apps-paper-industry.component';
import { DoubledirectionComponent } from './Thrustballbearings/doubledirection/doubledirection.component';
import { SingledirectionComponent } from './Thrustballbearings/singledirection/singledirection.component';
import { SphericalthrustrollerbearingsComponent } from './Thrustballbearings/sphericalthrustrollerbearings/sphericalthrustrollerbearings.component';


const routes: Routes = [
  {
    path: '',
    component: TechnicalAppsPaperIndustryComponent,
    children: [
      // { path: '', redirectTo: 'calculation' },
      // {
      //   path: 'calculation/:id',
      //   component: CalculationComponent,
      //   resolve: {
      //     data: ResolveGuard,
      //   },
      // },
      {
        path: 'deepGroove',
        component: DeepGrooveComponent,
      },
      {
        path: 'angularContact',
        component: AngularContactComponent,
      },
      {
        path: 'deepGroovesinglerow',
        component: DeepGrooveSingleRowComponent,
      },
      {
        path: 'deepGrooveextrasmallminiature',
        component: ExtraSmallMiniatureBallBearingsComponent,
      },
      {
        path: 'deepGroovedouble',
        component: DeepGrooveDoubleComponent,
      },
      {
        path: 'angularcontactsinglerow',
        component: AngularcontactsinglerowComponent ,
      },
      {
        path: 'angularcontactdoublerow',
        component: AngularcontactdoublerowComponent ,
      },
      {
        path: 'angularcontactmatchedpair',
        component: AngularcontactmatchedpairComponent ,
      },
      {
        path: 'selfaligningopentype',
        component: SelfAligningopentypeComponent ,
      },
      {
        path: 'selfaligningsealedtype',
        component: SelfAligningsealedtypeComponent ,
      },
      {
        path: 'selfaligningringtype',
        component: SelfAligningringtypeComponent ,
      },
      {
        path: 'selfaligningadapterassemblies',
        component: SelfAligningadapterassembliesComponent ,
      },
      {
        path: 'cylindricalrollersinglerow',
        component: CylindricalrollersinglerowComponent ,
      },
      {
        path: 'cylindricalrollerdoublerow',
        component: CylindricalrollerdoublerowComponent ,
      },
      {
        path: 'cylindricalrollerthrustcollars',
        component: CylindricalrollerthrustcollarsComponent ,
      },
      {
        path: 'Deepgroovesinglerowopen',
        component: DeepgroovesinglerowopenComponent ,
      },
      {
        path: 'Deepgroovesinglerowshielded',
        component:  DeepgroovesinglerowshieldedComponent ,

      },
      {
        path: 'Deepgroovesinglerowsnapring',
        component:   DeepgroovesinglerowsnapringComponent ,
      },
      {
        path: 'openshieldedtype',
        component:   OpenShieldedtypeComponent ,
      },
      {
        path: 'flangedtype',
        component:   FlangedtypeComponent ,
      },
      {
        path: 'taperedsinglerow',
        component:   TaperedsinglerowComponent ,
      },
      {
        path: 'tapereddoublerow',
        component:   TapereddoublerowComponent ,
      },
      {
        path: 'adapterassembliesspherical',
        component:   AdapterassembliesshpericalComponent ,
      },
      {
        path: 'sphericalrollerbearings',
        component:   SphericalrollerbearingsComponent ,
      },
      {
        path: 'withdrawalsleevesspherical',
        component:  WithdrawalsleevessphericalComponent ,
      },
      {
        path: 'doubledirection',
        component:  DoubledirectionComponent ,
      },

      {
        path: 'singledirection',
        component:  SingledirectionComponent ,
      },
      {
        path: 'sphericalthrustrollerbearings',
        component: SphericalthrustrollerbearingsComponent ,
      },
      {
        path: 'combined',
        component: CombinedComponent ,
      },

      {
        path: 'drawncuptype',
        component: DrawncuptypeComponent ,
      },

      {
        path: 'heavydutytype',
        component: HeavydutytypeComponent ,
      },

      {
        path: 'innerring',
        component: InnerringComponent ,
      },

      {
        path: 'miniatureonewayclutches',
        component: MiniatureonewayclutchesComponent ,
      },

      {
        path: 'needlerollerandcageassemblies',
        component: NeedlerollerandcageassembliesComponent ,
      },

      {
        path: 'Thrust',
        component:ThrustComponent ,
      },






      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class technicalAppsPaperIndustryRoutingModule {}
