import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";
import { DownloadsComponent } from "app/home/downloads/downloads.component";
import { DownloadsDetailComponent } from "app/home/downloads/detail.component";

const routes: Routes = [
    {
        path: '',
        component: DownloadsComponent
    }, {
        path: ':id', component: DownloadsDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class DownloadsRoutingModule { }
