import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";

import { DownloadsDetailComponent } from "app/home/downloads/detail.component";
import { DownloadsComponent } from "app/home/downloads/downloads.component";

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            pathMatch: 'full',
            component: DownloadsComponent,

        }, {
            path: ':id',
            component: DownloadsDetailComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DownloadsRoutingModule { }
