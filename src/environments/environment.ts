export const environment = {
  production: false,
  baseURL: 'http://localhost:3000/',

  // BearingCatalog

  // * Single Row
  GetSinglerowopentype: 'deepgroove/singlerowopentype',
  GetSinglerowsealedtype: 'deepgroove/singlerowsealedtype',
  GetSinglerowsnapringgroovetype: 'deepgroove/singlerowsnapringgroovetype',
  // * ExtraSmallMiniature
  GetExtrasmallminiatureballbearings: 'deepgroove/extrasmallminiatureballbearingstype',
  GetFlangedtype: 'deepgroove/extrasmallminiatureflangedtype',
  GetDoublerowdeepgroove: 'deepgroove/doublerowdeepgroovetype',
  GetSinglerowcontactball: 'angularcontact/angularcontactsinglerow',
  GetMatchedpair: 'angularcontact/matchedpair',
  GetDoublerowcontactball: 'angularcontact/doublerow',
  GetSelfaligningopentype: 'selfaligning/selfaligningopentype',
  GetSelfaligningsealedtype: 'selfaligning/selfaligningsealedtype',
  GetExtendedinnerringtype: 'selfaligning/extendedinnerringtype',
  GetAdapterassemlies: 'selfaligning/adapterassembliestype',
  GetSinglerowcylindrical: 'cylindricalroller/cylindricalrollersinglerow',
  GetThrustcollars: 'cylindricalroller/thrustcollars',
  GetDoublerowcylidrical: 'cylindricalroller/doublerowcylindrical',

  //* Tapered roller
  // GetTaperedollerSingleRow: 'taperedroller/taperedrollersinglerow',
  GetSinglerowmetricseries: 'taperedroller/Singlerowmetricseries',
  Getsinglerowinchseries: 'taperedroller/Singlerowinchseries',
  GetTdotype: 'taperedroller/tdotype',
  GetTditype: 'taperedroller/tditype',
  GetSphericalrollerbearings: 'sphericalroller/sphericalrollerbearings',
  GetAdapterassembliesshperical: 'sphericalroller/adapterassemlies',
  GetWithdrawalsleeves: 'sphericalroller/Withdrawalsleeves',
  GetSingledirctionthrust: 'thrustroller/singledirctionthrust',
  GetDoubledirectionthrust: 'thrustroller/doubledirctionthrust',
  GetGetsphericalthrustroller: 'thrustroller/sphericalthrustroller',
  GetRadialneedlemetricseries: 'radialneedlemetricseries',
  GetRadialneedleinchseries: 'radialneedleinchseries',
  GetDrawcupneedleinchseries: 'drawcupneedleinchseries',
  GetDrawcupneedlemetricseries: 'drawcupneedlemetricseries',
  GetHeavydutyneedlemetricseries: 'heavydutyneedlemetricseries',
  GetHeavydutyneedleinchseries: 'heavydutyneedleinchseries',
  GetNeedlerollerthrustinchseries: 'needlerollerthrustinchseries',
  GetNeedlerollerthrustmetricseries2: 'needlerollerthrustmetricseries2',
  GetCombinedneedlemetricseries: 'Combinedneedlemetricseries',
  GetCombinedneedlemetricseries2: 'combinedneedlemetricseries2',
  GetNeedlerollermetricseries: 'needlerollermetricseries',
  GetNeedlerollermetricseries2: 'needlerollermetricseries2',
  GetHeavydutyneedleinnerrings: 'heavydutyneedleinnerrings',
  GetMiniatureonewayclutches: 'miniatureonewayclutches',
  GetNeedlerollerthrustmetricseries: 'needlerollerthrustmetricseries',

  GetSerialnoindex: 'bearing-catalogue/api/GetSerialnoindex',
  // Getsinglerowopentype: 'deepgroove/singlerowopentype',
  // GetSinglerowopentype: 'bearing-catalogue/api/getsinglerowopentype', singlerowopentype: 'deepgroove/singlerowopentype',
};

// like wise do like these, all thes api are GET so 1st check how many total api are there and in environment.ts file
// create a varibale like that and copy paste its api url to the variable
// once environment.ts file gets over means then go to the service file
//
