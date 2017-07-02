import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { PivotComponent } from "app/pivot/pivot.component";

const routes: Routes = [
    { path: '', redirectTo: '/pivot', pathMatch: 'full' },
    {
        path: 'pivot',
        component: PivotComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'article',
                loadChildren: 'app/pivot/article/_.module#ArticleModule',
                canLoad: [AuthGuard]
            },
            {
                path: 'user',
                loadChildren: 'app/pivot/user/user.module#UserModule',
                canLoad: [AuthGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PivotRoutingModule { }
