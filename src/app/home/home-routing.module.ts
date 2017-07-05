import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { NavComponent } from "app/home/nav/nav.component";
import { DownloadsComponent } from "app/home/downloads/downloads.component";
import { DownloadsDetailComponent } from "app/home/downloads/detail.component";
import { InfosComponent } from "app/home/infos/infos.component";
import { InfosDetailComponent } from "app/home/infos/detail.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
        children: [
            { path: 'infos', loadChildren: 'app/home/infos/_.module#InfosModule' },
            { path: 'downloads', loadChildren: 'app/home/downloads/_.module#DownloadsModule' }
            // {
            //     path: 'downloads',
            //     children: [{
            //         path: '',
            //         component: DownloadsComponent,
            //         pathMatch: 'full'
            //     }, {
            //         path: ':id',
            //         component: DownloadsDetailComponent
            //     }]
            // }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
