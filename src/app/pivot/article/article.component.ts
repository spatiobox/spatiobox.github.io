import { Component, OnInit } from '@angular/core';
import { ArticleService } from "app/_services/article.service";
import { XI } from "app/xi.global";

@Component({
    templateUrl: './article.html'
})

export class ArticleComponent implements OnInit {
    title = 'article';
    models = [];

    constructor(private $article: ArticleService) {
        console.log('list');
    }

    ngOnInit() {

    }

    toggle(evt, node, isAll) {
        if (node) {
            if (node._selected) delete node._selected;
            else node._selected = true;
        } else {
            if (isAll) {
                this.models.forEach(x => {
                    delete x._selected;
                })
            } else {
                this.models.forEach(x => {
                    x._selected = true;
                })
            }
        }
    }

    deletes(evt, node) {
        let arr = [];
        if (node) {
            arr.push(node.ID);
        } else {
            var list = this.models.filter(x => x._selected);
            if (list.length <= 0) {
                alert('当前未选中任何资讯信息!');
                return;
            }
            arr = list.map(x => x.ID);
        }
        this.$article.deletes(arr).subscribe(res => {
            this.models = this.models.filter(x => !x._selected);
        }, err => {
            let _error = err.json();
            if (_error.error) {
                XI.showMsg(_error.error);
            } else {

                XI.showMsg('delete failed')
            }
        });
    }
}
