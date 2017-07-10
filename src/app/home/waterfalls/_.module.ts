import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "app/_services/article.service";
import { ShareModule } from "app/share.module";
import { WaterfallsDetailComponent } from "app/home/waterfalls/detail.component";
import { WaterfallsComponent } from "app/home/waterfalls/waterfalls.component";
import { WaterfallsRoutingModule } from "app/home/waterfalls/_.routing";



@NgModule({
    declarations: [
        WaterfallsComponent,
        WaterfallsDetailComponent,
    ],
    imports: [
        CommonModule,
        ShareModule,
        WaterfallsRoutingModule
    ],
    providers: [ArticleService]
})
export class WaterfallsModule { }
