import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { NavComponent } from './nav/nav.component';
import { InfosModule } from "app/home/infos/_.module";
import { ShareModule } from "app/share.module";
import { DownloadsModule } from "app/home/downloads/_.module";


@NgModule({
    declarations: [
        HomeComponent,
        NavComponent

    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        ShareModule,
        InfosModule,
        DownloadsModule
    ],
    providers: [
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
