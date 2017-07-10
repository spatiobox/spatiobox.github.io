import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";

import { WaterfallsDetailComponent } from "app/home/waterfalls/detail.component";
import { WaterfallsComponent } from "app/home/waterfalls/waterfalls.component";

const routes: Routes = [
    {
        path: '',
        children: [{
            path: '',
            component: WaterfallsComponent,

        }, {
            path: ':id',
            component: WaterfallsDetailComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class WaterfallsRoutingModule { }
