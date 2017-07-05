import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "app/_services/auth-guard.service";
import { PivotComponent } from "app/pivot/pivot.component";

const routes: Routes = [
    {
        path: '',
        component: PivotComponent,
        canActivate: [AuthGuard],
        children: [
            // {
            //     path: '',
            //     pathMatch: 'full',
            //     redirectTo: '/dashboard'
            // },
            {
                path: 'dashboard',
                loadChildren: 'app/pivot/dashboard/_.module#DashboardModule',
                canLoad: [AuthGuard]
            },
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
