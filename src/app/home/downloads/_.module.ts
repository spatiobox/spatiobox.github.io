import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "app/_services/article.service";
import { DownloadsDetailComponent } from "app/home/downloads/detail.component";
import { DownloadsComponent } from "app/home/downloads/downloads.component";
import { DownloadsRoutingModule } from "app/home/downloads/_.routing";



@NgModule({
    declarations: [
        DownloadsComponent,
        DownloadsDetailComponent
    ],
    imports: [
        CommonModule,
        DownloadsRoutingModule
    ],
    providers: [ArticleService]
})
export class DownloadsModule { }
