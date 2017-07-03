import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ArticleComponent } from "app/pivot/article/article.component";
import { ArticleCreateComponent } from "app/pivot/article/create.component";
import { ArticleEditComponent } from "app/pivot/article/edit.component";
import { ArticleRoutingModule } from "app/pivot/article/_.routing";
import { ArticleDetailComponent } from "app/pivot/article/detail.component";
import { ArticleDetailResolver } from "app/pivot/article/resolve.service";
import { ArticleService } from "app/_services/article.service";
import { ShareModule } from "app/share.module";



@NgModule({
    declarations: [
        ArticleComponent,
        ArticleDetailComponent,
        ArticleCreateComponent,
        ArticleEditComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        ArticleRoutingModule

    ],
    providers: [ArticleService]
})
export class ArticleModule { }
