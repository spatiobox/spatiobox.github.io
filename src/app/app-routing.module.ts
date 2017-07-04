import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "app/_services/auth-guard.service";
import { PageNotFoundComponent } from "app/page-not-found.component";
import { HeaderComponent } from "app/navigation/header.component";
import { AppPreloadingStrategyService } from "app/_services/app-preloading-strategy.service";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'ui', loadChildren: 'app/ui/ui.module#UIModule' },
  { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'pivot', loadChildren: 'app/pivot/pivot.module#PivotModule' }

  // { path: 'pivot', loadChildren: 'app/pivot/pivot.module#PivotModule' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: false,
      useHash: false,
      preloadingStrategy: AppPreloadingStrategyService
    }/* <-- debugging purposes only*/)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
