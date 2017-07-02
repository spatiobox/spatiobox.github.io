import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CommonModule } from "@angular/common";
import { InfoComponent } from './info/info.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
    declarations: [
        HomeComponent,
        InfoComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ],
    providers: [
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule { }
