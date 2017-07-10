import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";
import { InfosComponent } from "app/home/infos/infos.component";
import { InfosDetailComponent } from "app/home/infos/detail.component";

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: InfosComponent,

        }, {
            path: ':id',
            component: InfosDetailComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class InfosRoutingModule { }
