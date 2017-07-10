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
        children: [
            {
                path: '',
                component: ArticleComponent
            }, {
                path: 'create', component: ArticleCreateComponent,
                // canDeactivate: [CanDeactivateGuard] //编辑退出时，进行拦截
                // outlet: "box",
            },
        ]
    },
    {
        path: ':id',
        resolve: {
            article: ArticleDetailResolver
        },
        children: [
            {
                path: 'edit', component: ArticleEditComponent,
            },
            {
                path: '', component: ArticleDetailComponent,
                pathMatch: 'full'
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [ArticleDetailResolver]
})
export class ArticleRoutingModule { }
