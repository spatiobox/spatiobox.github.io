import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotRoutingModule } from "app/pivot/pivot-routing.module";


import { PivotComponent } from "app/pivot/pivot.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthService } from "app/_services/auth.service";
import { CommonModule } from "@angular/common";
import { ShareModule } from "app/share.module";
import { UserModule } from "app/pivot/user/user.module";
import { NavComponent } from './nav/nav.component';
import { ArticleModule } from "app/pivot/article/_.module";


@NgModule({
    declarations: [
        PivotComponent,
        NavComponent
    ],
    imports: [
        CommonModule,
        PivotRoutingModule,
        ShareModule,
        ArticleModule,
        UserModule
    ],
    providers: [
        AuthGuard,
        AuthService

    ],
    exports: []
})
export class PivotModule { }
