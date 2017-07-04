import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "app/_services/article.service";
import { DownloadsComponent } from "app/home/downloads/downloads.component";
import { DownloadsDetailComponent } from "app/home/downloads/detail.component";
import { ShareModule } from "app/share.module";
import { DownloadsRoutingModule } from "app/home/downloads/_.routing";



@NgModule({
    declarations: [
        DownloadsComponent,
        DownloadsDetailComponent,
    ],
    imports: [
        CommonModule,
        ShareModule,
        DownloadsRoutingModule
    ],
    providers: [ArticleService]
})
export class DownloadsModule { }
