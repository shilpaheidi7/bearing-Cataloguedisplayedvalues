import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BearingCatalogueService {
  constructor(private http: HttpClient) {}

  // Deep Groove Ball Bearings

  GetSinglerowopentype(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowopentype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSinglerowsealedtype(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowsealedtype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSinglerowsnapringgroovetype(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowsnapringgroovetype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetExtrasmallminiatureballbearings(): Observable<any> {
    return this.http.get<any>(`${environment.GetExtrasmallminiatureballbearings}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetFlangedtype(): Observable<any> {
    return this.http.get<any>(`${environment.GetFlangedtype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetDoublerowdeepgroove(): Observable<any> {
    return this.http.get<any>(`${environment.GetDoublerowdeepgroove}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  // Angular Contact Ball Bearings

  GetSinglerowcontactball(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowcontactball}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetMatchedpair(): Observable<any> {
    return this.http.get<any>(`${environment.GetMatchedpair}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetDoublerowcontactball(): Observable<any> {
    return this.http.get<any>(`${environment.GetDoublerowcontactball}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  // Self Aligning Ball Bearings

  GetAdapterassemlies(): Observable<any> {
    return this.http.get<any>(`${environment.GetAdapterassemlies}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetAdapterassembliesshperical(): Observable<any> {
    return this.http.get<any>(`${environment.GetAdapterassembliesshperical}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetCombinedneedlemetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetCombinedneedlemetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetCombinedneedlemetricseries2(): Observable<any> {
    return this.http.get<any>(`${environment.GetCombinedneedlemetricseries2}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetDoubledirectionthrust(): Observable<any> {
    return this.http.get<any>(`${environment.GetDoubledirectionthrust}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetDoublerowcylidrical(): Observable<any> {
    return this.http.get<any>(`${environment.GetDoublerowcylidrical}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetDrawcupneedleinchseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetDrawcupneedleinchseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetDrawcupneedlemetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetDrawcupneedlemetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetExtendedinnerringtype(): Observable<any> {
    return this.http.get<any>(`${environment.GetExtendedinnerringtype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetHeavydutyneedleinchseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetHeavydutyneedleinchseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetHeavydutyneedleinnerrings(): Observable<any> {
    return this.http.get<any>(`${environment.GetHeavydutyneedleinnerrings}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetHeavydutyneedlemetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetHeavydutyneedlemetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetMiniatureonewayclutches(): Observable<any> {
    return this.http.get<any>(`${environment.GetMiniatureonewayclutches}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetNeedlerollermetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetNeedlerollermetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetNeedlerollermetricseries2(): Observable<any> {
    return this.http.get<any>(`${environment.GetNeedlerollermetricseries2}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetNeedlerollerthrustinchseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetNeedlerollerthrustinchseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetNeedlerollerthrustmetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetNeedlerollerthrustmetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetNeedlerollerthrustmetricseries2(): Observable<any> {
    return this.http.get<any>(`${environment.GetNeedlerollerthrustmetricseries2}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetRadialneedleinchseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetRadialneedleinchseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetRadialneedlemetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetRadialneedlemetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSelfaligningopentype(): Observable<any> {
    return this.http.get<any>(`${environment.GetSelfaligningopentype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSelfaligningsealedtype(): Observable<any> {
    return this.http.get<any>(`${environment.GetSelfaligningsealedtype}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSerialnoindex(): Observable<any> {
    return this.http.get<any>(`${environment.GetSerialnoindex}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSingledirctionthrust(): Observable<any> {
    return this.http.get<any>(`${environment.GetSingledirctionthrust}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSinglerowcylindrical(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowcylindrical}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  Getsinglerowinchseries(): Observable<any> {
    return this.http.get<any>(`${environment.Getsinglerowinchseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }
  GetSinglerowmetricseries(): Observable<any> {
    return this.http.get<any>(`${environment.GetSinglerowmetricseries}`).pipe(
      map((m) => {
        let data = m.data;
        return data;
      })
    );
  }

  GetSphericalrollerbearings(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetSphericalrollerbearings}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
  GetTditype(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetTditype}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
  GetTdotype(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetTdotype}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
  GetThrustcollars(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetThrustcollars}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
  GetWithdrawalsleeves(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetWithdrawalsleeves}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
  GetGetsphericalthrustroller(): Observable<any> {
    return this.http
      .get<any>(`${environment.GetGetsphericalthrustroller}`)

      .pipe(
        map((m) => {
          let data = m.data;
          return data;
        })
      );
  }
}

// create a function for separate api's
// function_name(): Observable<any> {
//     return this.http
//       .get<any>(`${environment.api_name}`)
//       .pipe(
//         map((m) => {
//           let data = m.data;
//           return data;
//         })
//       );
//   }
// keep the api name as function name
