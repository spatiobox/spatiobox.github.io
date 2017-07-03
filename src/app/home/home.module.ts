import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { NavComponent } from './nav/nav.component';
import { InfosModule } from "app/home/infos/_.module";


@NgModule({
    declarations: [
        HomeComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule,
        InfosModule
    ],
    providers: [
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
