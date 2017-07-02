import { Injectable } from '@angular/core';
import {
    Router, Resolve, RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { ArticleService } from "app/_services/article.service";


@Injectable()
export class ArticleDetailResolver implements Resolve<any> {
    constructor(private $article: ArticleService, private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let id = route.paramMap.get('id');

        return this.$article.get(id).subscribe(res => {
            let _data = res.json();
            if (_data) {
                return _data;
            } else { // id not found
                this.router.navigate(['/pivot/article']);
                return null;
            }
        });
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/