import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from "app/home/nav/nav.component";
import { DownloadsComponent } from "app/home/downloads/downloads.component";
import { DownloadsDetailComponent } from "app/home/downloads/detail.component";
import { InfosComponent } from "app/home/infos/infos.component";
import { InfosDetailComponent } from "app/home/infos/detail.component";
import { HomeComponent } from "app/home/home.component";
import { HomeLayout } from "app/home/_.layout";

const routes: Routes = [
    {
        path: '',
        component: HomeLayout,
        children: [
            { path: '', component: HomeComponent },
            { path: 'infos', loadChildren: 'app/home/infos/_.module#InfosModule' },
            { path: 'downloads', loadChildren: 'app/home/downloads/_.module#DownloadsModule' },
            { path: 'waterfalls', loadChildren: 'app/home/waterfalls/_.module#WaterfallsModule' }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
