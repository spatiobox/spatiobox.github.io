import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleService } from "app/_services/article.service";
import { LotteryRoutingModule } from "app/home/lottery/_.routing";
import { DiscComponent } from "app/home/lottery/disc.component";



@NgModule({
    declarations: [
        DiscComponent
    ],
    imports: [
        CommonModule,
        LotteryRoutingModule
    ],
    providers: [ArticleService]
})
export class LotteryModule { }
