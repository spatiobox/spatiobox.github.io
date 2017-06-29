import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Hero {
    constructor(public id: number, public name: string) { }
}

const HEROES: Hero[] = [
    new Hero(11, 'Mr. Nice'),
    new Hero(12, 'Narco'),
    new Hero(13, 'Bombasto'),
    new Hero(14, 'Celeritas'),
    new Hero(15, 'Magneta'),
    new Hero(16, 'RubberMan')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ProfileService {
    url = '/api/profile';

    constructor(private $http: Http) {
    }

    get() {
        let _url = `${this.url}`;
        return this.$http.get(_url, {});
    }

}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/