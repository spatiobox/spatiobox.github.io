import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { CommonModule } from "@angular/common";
import { NavComponent } from './nav/nav.component';
import { HomeRoutingModule } from "app/home/_.routing";
import { InfosModule } from "app/home/infos/_.module";
import { ShareModule } from "app/share.module";
import { DownloadsModule } from "app/home/downloads/_.module";
import { HomeLayout } from "app/home/_.layout";
import { LotteryModule } from "app/home/lottery/_.module";


@NgModule({
    declarations: [
        HomeLayout,
        HomeComponent,
        NavComponent

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ShareModule,
        InfosModule,
        DownloadsModule,
        LotteryModule
    ],
    providers: [
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
