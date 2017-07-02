import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './detail.html'
})

export class ArticleDetailComponent implements OnInit {
    title = 'article';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        console.log('detail', id, this.route);

        this.route.data.subscribe((data: { article: any }) => {
            console.log('route data', data);
        });
    }
}
