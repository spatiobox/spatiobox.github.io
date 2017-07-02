import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { InfoComponent } from "app/home/info/info.component";
import { NavComponent } from "app/home/nav/nav.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'info', component: InfoComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
