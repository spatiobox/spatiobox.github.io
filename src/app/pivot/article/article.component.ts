import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: './article.html'
})

export class ArticleComponent implements OnInit {
    title = 'article';
    constructor() {
        console.log('list');
    }

    ngOnInit() {

    }
}
