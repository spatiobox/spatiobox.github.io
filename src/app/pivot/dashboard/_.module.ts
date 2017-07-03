import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "app/pivot/dashboard/_.routing";


@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ],
    providers: [],
    exports: [DashboardComponent]
})
export class DashboardModule { }
