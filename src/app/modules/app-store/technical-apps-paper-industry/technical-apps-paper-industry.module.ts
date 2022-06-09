import { BearingCatalougeTableComponent } from './../../../shared/components/bearing-catalouge-table/bearing-catalouge-table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechnicalAppsPaperIndustryComponent } from './technical-apps-paper-industry.component';
import { technicalAppsPaperIndustryRoutingModule } from './technical-apps-paper-industry.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { DeepGrooveComponent } from './deep-groove/deep-groove.component';
import { AngularContactComponent } from './angular-contact/angular-contact.component';
import { SearchPipe } from 'src/app/shared/pips/search/search.pipe';
import { DeepGrooveTableComponent } from './deep-groove/deep-groove-table/deep-groove-table.component';
import { AngularContactTableComponent } from './angular-contact/angular-contact-table/angular-contact-table.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DeepGrooveSingleRowComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepGrooveSingleRow.component';
import { DeepGrooveDoubleComponent } from './Deep groove ball bearing/deepGrooveDouble/deepGrooveDouble.component';
import { ExtraSmallMiniatureBallBearingsComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/extraSmallMiniatureBallBearings.component';
import { AngularcontactsinglerowComponent } from './Angular contact ball bearing/Angularcontactsinglerow/Angularcontactsinglerow.component';
import { AngularcontactdoublerowComponent } from './Angular contact ball bearing/Angularcontactdoublerow/Angularcontactdoublerow.component';
import { AngularcontactmatchedpairComponent } from './Angular contact ball bearing/Angularcontactmatchedpair/Angularcontactmatchedpair.component';
import { SelfAligningopentypeComponent } from './Self-aligning ball bearings/Self-aligningopentype/Self-aligningopentype.component';
import { SelfAligningsealedtypeComponent } from './Self-aligning ball bearings/Self-aligningsealedtype/Self-aligningsealedtype.component';
import { SelfAligningringtypeComponent } from './Self-aligning ball bearings/Self-aligningringtype/Self-aligningringtype.component';
import { SelfAligningadapterassembliesComponent } from './Self-aligning ball bearings/Self-aligningadapterassemblies/Self-aligningadapterassemblies.component';
import { CylindricalrollersinglerowComponent } from './Cylindrical roller bearings/Cylindricalrollersinglerow/Cylindricalrollersinglerow.component';
import { CylindricalrollerdoublerowComponent } from './Cylindrical roller bearings/Cylindricalrollerdoublerow/Cylindricalrollerdoublerow.component';
import { CylindricalrollerthrustcollarsComponent } from './Cylindrical roller bearings/Cylindricalrollerthrustcollars/Cylindricalrollerthrustcollars.component';
import { DeepgroovesinglerowopenComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowopen/deepgroovesinglerowopen.component';
import { DeepgroovesinglerowshieldedComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowshielded/deepgroovesinglerowshielded.component';
import { DeepgroovesinglerowsnapringComponent } from './Deep groove ball bearing/deepGrooveSingleRow/deepgroovesinglerowsnapring/deepgroovesinglerowsnapring.component';
import { OpenShieldedtypeComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/open-shieldedtype/open-shieldedtype.component';
import { FlangedtypeComponent } from './Deep groove ball bearing/extraSmallMiniatureBallBearings/flangedtype/flangedtype.component';

import { SingleRowComponent } from './Angular contact ball bearing/Angularcontactsinglerow/single-row/single-row.component';
import { MatchedPairComponent } from './Angular contact ball bearing/Angularcontactmatchedpair/matched-pair/matched-pair.component';
import { DoubleRowComponent } from './Deep groove ball bearing/deepGrooveDouble/double-row/double-row.component';
import { ContactdoublerowComponent } from './Angular contact ball bearing/Angularcontactdoublerow/contactdoublerow/contactdoublerow.component';
import { SelftableAdapterassemliesComponent } from './Self-aligning ball bearings/Self-aligningadapterassemblies/selftableAdapterassemlies/selftableAdapterassemlies.component';
import { SelftableopentypeComponent } from './Self-aligning ball bearings/Self-aligningopentype/Selftableopentype/Selftableopentype.component';
import { SelftableringtypeComponent } from './Self-aligning ball bearings/Self-aligningringtype/selftableringtype/selftableringtype.component';
import { SelftablesealedtypeComponent } from './Self-aligning ball bearings/Self-aligningsealedtype/Selftablesealedtype/Selftablesealedtype.component';
import { SinglerowcylindricalComponent } from './Cylindrical roller bearings/Cylindricalrollersinglerow/singlerowcylindrical/singlerowcylindrical.component';
import { DoublerowcylidricalComponent } from './Cylindrical roller bearings/Cylindricalrollerdoublerow/Doublerowcylidrical/Doublerowcylidrical.component';
import { ThrustcollarsComponent } from './Cylindrical roller bearings/Cylindricalrollerthrustcollars/Thrustcollars/Thrustcollars.component';
import { TaperedsinglerowComponent } from './Tapered roller bearings/taperedsinglerow/taperedsinglerow.component';
import { TapereddoublerowComponent } from './Tapered roller bearings/tapereddoublerow/tapereddoublerow.component';
import { MetricseriesComponent } from './Tapered roller bearings/taperedsinglerow/metricseries/metricseries.component';
import { InchseriesComponent } from './Tapered roller bearings/taperedsinglerow/inchseries/inchseries.component';
import { TDItypeComponent } from './Tapered roller bearings/tapereddoublerow/TDItype/TDItype.component';
import { TDOtypeComponent } from './Tapered roller bearings/tapereddoublerow/TDOtype/TDOtype.component';
import { SphericalrollerbearingsComponent } from './Sphericalrollerbearings/Sphericalrollerbearings/Sphericalrollerbearings.component';
import { AdapterassembliesshpericalComponent } from './Sphericalrollerbearings/Adapterassembliesshperical/Adapterassembliesshperical.component';
import { WithdrawalsleevessphericalComponent } from './Sphericalrollerbearings/Withdrawalsleevesspherical/Withdrawalsleevesspherical.component';
import { SphericalrollerbearingstableComponent } from './Sphericalrollerbearings/Sphericalrollerbearings/sphericalrollerbearingstable/sphericalrollerbearingstable.component';
import { AdapterassembliessphericaltableComponent } from './Sphericalrollerbearings/Adapterassembliesshperical/adapterassembliessphericaltable/adapterassembliessphericaltable.component';
import { WithdrawalsleevessphericaltableComponent } from './Sphericalrollerbearings/Withdrawalsleevesspherical/withdrawalsleevessphericaltable/withdrawalsleevessphericaltable.component';
import { DoubledirectionComponent } from './Thrustballbearings/doubledirection/doubledirection.component';
import { SingledirectionComponent } from './Thrustballbearings/singledirection/singledirection.component';
import { SphericalthrustrollerbearingsComponent } from './Thrustballbearings/sphericalthrustrollerbearings/sphericalthrustrollerbearings.component';
import { ThrustsingledirectionComponent } from './Thrustballbearings/singledirection/thrustsingledirection/thrustsingledirection.component';
import { ThrustdoubledirectionComponent } from './Thrustballbearings/doubledirection/thrustdoubledirection/thrustdoubledirection.component';
import { SphericalthrustrollertableComponent } from './Thrustballbearings/sphericalthrustrollerbearings/sphericalthrustrollertable/sphericalthrustrollertable.component';
import { CombinedComponent } from './needle roller bearings/combined/combined.component';
import { DrawncuptypeComponent } from './needle roller bearings/drawncuptype/drawncuptype.component';
import { HeavydutytypeComponent } from './needle roller bearings/heavydutytype/heavydutytype.component';
import { InnerringComponent } from './needle roller bearings/innerring/innerring.component';
import { MiniatureonewayclutchesComponent } from './needle roller bearings/Miniatureonewayclutches/Miniatureonewayclutches.component';
import { NeedlerollerandcageassembliesComponent } from './needle roller bearings/needlerollerandcageassemblies/needlerollerandcageassemblies.component';
import { ThrustComponent } from './needle roller bearings/thrust/thrust.component';
import { CombinedtableComponent } from './needle roller bearings/combined/combinedtable/combinedtable.component';
import { DrawncuptableComponent } from './needle roller bearings/drawncuptype/drawncuptable/drawncuptable.component';
import { HeavydutytableComponent } from './needle roller bearings/heavydutytype/heavydutytable/heavydutytable.component';
import { InnerringtableComponent } from './needle roller bearings/innerring/innerringtable/innerringtable.component';
import { MiniatureonewaytableComponent } from './needle roller bearings/Miniatureonewayclutches/miniatureonewaytable/miniatureonewaytable.component';
import { NeedlerollertableComponent } from './needle roller bearings/needlerollerandcageassemblies/needlerollertable/needlerollertable.component';
import { ThrusttableComponent } from './needle roller bearings/thrust/thrusttable/thrusttable.component';
import { NeedlerollerthrustinchseriesComponent } from './needle roller bearings/thrust/Needlerollerthrustinchseries/Needlerollerthrustinchseries.component';
import { NeedlerollerthrustmetricseriesComponent } from './needle roller bearings/thrust/Needlerollerthrustmetricseries/Needlerollerthrustmetricseries.component';
import { Combinedmetricseries2Component } from './needle roller bearings/combined/combinedmetricseries2/combinedmetricseries2.component';
import { DrawncupinchseriesComponent } from './needle roller bearings/drawncuptype/drawncupinchseries/drawncupinchseries.component';
import { HeavydutyinchseriesComponent } from './needle roller bearings/heavydutytype/heavydutyinchseries/heavydutyinchseries.component';
import { InnerringinchseriesComponent } from './needle roller bearings/innerring/innerringinchseries/innerringinchseries.component';
import { Innerringmetricseries2Component } from './needle roller bearings/innerring/innerringmetricseries2/innerringmetricseries2.component';
import { NeeedlerollerinchseriesComponent } from './needle roller bearings/needlerollerandcageassemblies/neeedlerollerinchseries/neeedlerollerinchseries.component';

@NgModule({
  declarations: [
    TechnicalAppsPaperIndustryComponent,
    DeepGrooveComponent,
    DeepGrooveTableComponent,
    AngularContactComponent,
    AngularContactTableComponent,
    BearingCatalougeTableComponent,
    SearchPipe,
    DeepGrooveSingleRowComponent,
    DeepGrooveDoubleComponent,
    ExtraSmallMiniatureBallBearingsComponent,
    AngularcontactsinglerowComponent,
    AngularcontactdoublerowComponent,
    AngularcontactmatchedpairComponent,
    SelfAligningopentypeComponent,
    SelfAligningsealedtypeComponent,
    SelfAligningringtypeComponent,
    SelfAligningadapterassembliesComponent,
    CylindricalrollersinglerowComponent,
    CylindricalrollerdoublerowComponent,
    CylindricalrollerthrustcollarsComponent,
    DeepgroovesinglerowopenComponent,
    DeepgroovesinglerowshieldedComponent,
    DeepgroovesinglerowsnapringComponent,
    OpenShieldedtypeComponent,
    FlangedtypeComponent,
    DoubleRowComponent,
    ContactdoublerowComponent,
    SingleRowComponent,
    MatchedPairComponent,
    SelftableAdapterassemliesComponent,
    SelftableopentypeComponent,
    SelftableringtypeComponent,
    SelftablesealedtypeComponent,
    SinglerowcylindricalComponent,
    DoublerowcylidricalComponent,
    ThrustcollarsComponent,
    TaperedsinglerowComponent,
    TapereddoublerowComponent,
    MetricseriesComponent,
    InchseriesComponent,
    TDItypeComponent,
    TDOtypeComponent,
    SphericalrollerbearingsComponent,
    AdapterassembliesshpericalComponent,
    WithdrawalsleevessphericalComponent,
    SphericalrollerbearingstableComponent,
    AdapterassembliessphericaltableComponent,
    WithdrawalsleevessphericaltableComponent,
    DoubledirectionComponent,
    SingledirectionComponent,
    SphericalthrustrollerbearingsComponent,
    ThrustsingledirectionComponent,
    ThrustdoubledirectionComponent,
    SphericalthrustrollertableComponent,
    CombinedComponent,
    DrawncuptypeComponent,
    HeavydutytypeComponent,
    InnerringComponent,
    MiniatureonewayclutchesComponent,
    NeedlerollerandcageassembliesComponent,
    ThrustComponent,
    CombinedtableComponent,
    DrawncuptableComponent,
    HeavydutytableComponent,
    InnerringtableComponent,
    MiniatureonewaytableComponent,
    NeedlerollertableComponent,
    ThrusttableComponent,
    NeedlerollerthrustinchseriesComponent,
    NeedlerollerthrustmetricseriesComponent,
    Combinedmetricseries2Component,
    DrawncupinchseriesComponent,
    HeavydutyinchseriesComponent,
    InnerringinchseriesComponent,
    Innerringmetricseries2Component,
    NeeedlerollerinchseriesComponent,
    NeedlerollerthrustinchseriesComponent,
    NeedlerollerthrustmetricseriesComponent,









  ],
  imports: [CommonModule, technicalAppsPaperIndustryRoutingModule, SharedModule, PanelMenuModule, Ng2SearchPipeModule],
  exports: [SearchPipe],
})
export class TechnicalAppsPaperIndustryModule {}
