import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRouteSnapshot } from '@angular/router';
import { ArticleComponent } from "app/pivot/article/article.component";
import { ArticleCreateComponent } from "app/pivot/article/create.component";
import { ArticleEditComponent } from "app/pivot/article/edit.component";
import { ArticleDetailComponent } from "app/pivot/article/detail.component";
import { CanDeactivateGuard } from "app/_services/can-deactive-guard.service";
import { ArticleDetailResolver } from "app/pivot/article/resolve.service";

const routes: Routes = [
    {
        path: '',
        component: ArticleComponent
    }, {
        path: ':id', component: ArticleDetailComponent,
        resolve: {
            article: ArticleDetailResolver
        }
    }, {
        path: 'create', component: ArticleCreateComponent,
        // canDeactivate: [CanDeactivateGuard] //编辑退出时，进行拦截
        // outlet: "box",
    }, {
        path: 'edit', component: ArticleEditComponent,
        // canDeactivate: [CanDeactivateGuard] //编辑退出时，进行拦截
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ArticleDetailResolver]
})
export class ArticleRoutingModule { }
