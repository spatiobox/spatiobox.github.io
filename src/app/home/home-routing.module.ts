import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { NavComponent } from "app/home/nav/nav.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'infos', loadChildren: 'app/home/infos/_.module#InfosModule' },
            { path: 'downloads', loadChildren: 'app/home/downloads/_.module#DownloadsModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
