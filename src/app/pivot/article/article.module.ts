import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleComponent } from "app/pivot/article/article.component";
import { ArticleRoutingModule } from "app/pivot/article/article-routing.module";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations: [
        ArticleComponent
    ],
    imports: [
        CommonModule,
        ArticleRoutingModule
    ],
    providers: []
})
export class ArticleModule { }
