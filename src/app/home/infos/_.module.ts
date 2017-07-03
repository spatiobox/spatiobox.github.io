import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "app/_services/article.service";
import { InfosComponent } from "app/home/infos/infos.component";
import { InfosDetailComponent } from "app/home/infos/detail.component";
import { InfosRoutingModule } from "app/home/infos/_.routing";



@NgModule({
    declarations: [
        InfosComponent,
        InfosDetailComponent
    ],
    imports: [
        CommonModule,
        InfosRoutingModule
    ],
    providers: [ArticleService]
})
export class InfosModule { }
