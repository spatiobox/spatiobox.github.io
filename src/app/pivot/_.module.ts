import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotRoutingModule } from "app/pivot/_.routing";


import { PivotComponent } from "app/pivot/pivot.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthService } from "app/_services/auth.service";
import { CommonModule } from "@angular/common";
import { ShareModule } from "app/share.module";
import { UserModule } from "app/pivot/user/_.module";
import { NavComponent } from './nav/nav.component';
import { ArticleModule } from "app/pivot/article/_.module";
import { DashboardModule } from "app/pivot/dashboard/_.module";
import { PivotLayout } from "app/pivot/_.layout";


@NgModule({
    declarations: [
        PivotLayout,
        PivotComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        PivotRoutingModule,
        ShareModule,
        ArticleModule,
        UserModule,
        DashboardModule
    ],
    providers: [
        AuthGuard,
        AuthService

    ],
    exports: []
})
export class PivotModule { }
