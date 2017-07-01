import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "app/_services/auth-guard.service";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { PageNotFoundComponent } from "app/page-not-found.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ui', loadChildren: 'app/ui/ui.module#UIModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  // { path: 'pivot', loadChildren: 'app/pivot/pivot.module#PivotModule' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true, useHash: false }/* <-- debugging purposes only*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
