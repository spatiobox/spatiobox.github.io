import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "app/_services/auth-guard.service";
import { PageNotFoundComponent } from "app/page-not-found.component";
import { AppPreloadingStrategyService } from "app/_services/app-preloading-strategy.service";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ui', loadChildren: 'app/ui/ui.module#UIModule' },
  { path: 'home', loadChildren: 'app/home/_.module#HomeModule' },
  { path: 'pivot', loadChildren: 'app/pivot/_.module#PivotModule' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      useHash: false,
      preloadingStrategy: AppPreloadingStrategyService
    }/* <-- debugging purposes only*/)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
