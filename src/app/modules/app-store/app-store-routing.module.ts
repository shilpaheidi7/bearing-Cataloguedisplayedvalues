import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/shared/components/login/login.component';
import { AppStoreComponent } from './app-store.component';

const routes: Routes = [
  { path: '', redirectTo: 'app-store', pathMatch: 'full' },
  { path: 'app-store', component: AppStoreComponent },
  { path: 'login', component: LoginComponent },
  { path: 'technical-apps-paper-industry', loadChildren: () => import('./technical-apps-paper-industry/technical-apps-paper-industry.module').then(m => m.TechnicalAppsPaperIndustryModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppStoreRoutingModule { }
