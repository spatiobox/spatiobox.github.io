import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";
import { DiscComponent } from "app/home/lottery/disc.component";


const routes: Routes = [
    {
        path: '',
        children: [{
            path: 'disc',
            component: DiscComponent,

        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class LotteryRoutingModule { }
