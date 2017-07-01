import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PivotRoutingModule } from "app/pivot/pivot-routing.module";
import { ArticleModule } from "app/pivot/article/article.module";
import { PivotComponent } from "app/pivot/pivot.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthService } from "app/_services/auth.service";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        PivotComponent
    ],
    imports: [
        CommonModule,
        PivotRoutingModule,
        ArticleModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ]
})
export class PivotModule { }
