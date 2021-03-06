/**
 * Created by zero on 7/19/16.
 */
import { Injectable, Output } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { XI } from "app/xi.global";
import { Observable } from "rxjs/Observable";

//import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */

declare var $: any;
declare var sessionStorage: any;

@Injectable()
export class AuthService {
    url: string;
    redirectUrl: string;
    http: Http;

    constructor(public $http: Http) {
        this.http = $http;
        this.url = XI.location + '/OAuth/Token';
        this.redirectUrl = '/login';
    }
    isLoggedIn() {
        return !!sessionStorage.getItem('id_token');
    }
    all() {
        return this.http.get(this.url).subscribe(x => {
            if (x.status == 200) return x.json();
        });
    }

    get(id: any) {
        let _url = this.url + '/' + id;
        return this.http.get(_url, { headers: this.getToken() });
    }

    getBy(category: any, id: string) {
        var _url = this.url + '/{category}/{id}'.replace('{category}', category).replace('{id}', id);
        return this.http.post(_url, { headers: this.getToken() }).subscribe(x => {
            if (x.status == 200) return Promise.resolve(x.json());
        });
    }

    post(node: any) {
        var _headers = this.getToken();
        var str = '';
        for (var i in node) {
            str += '&' + i + '=' + node[i];
        }
        var options = { headers: _headers };
        return this.http.post(this.url, str, options);
    }
    SignIn(node) {
        // Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
        return new Promise((resolve, reject) => {
            this.post(node).subscribe(res => {
                let _data = res.json();

                sessionStorage.setItem('id_token', _data.access_token);
                // sessionStorage.removeItem('profile');
                // sessionStorage.setItem('profile', JSON.stringify(_profile));
                resolve(_data);
            }, err => {
                if (err.status == 401) sessionStorage.clear();
                let _error = err.json();
                console.log('sign err', _error);
                XI.showMsg(_error.error);
                reject(_error);
            });
        });
    }

    SignOut() {
        sessionStorage.removeItem('profile');
        sessionStorage.removeItem('id_token');
        sessionStorage.clear();
    }

    put(node: any) {
        var _url = this.url + '/{id}'.replace('{id}', node.ID);
        return this.http.put(_url, $.param(node), { headers: this.getToken() }).subscribe(x => {
            if (x.status == 200) return x.json();
        });
    }

    patch(node: any) {
        return this.http.patch(this.url, JSON.stringify(node), { headers: this.getToken() });
    }

    delete(id: any) {
        var _url = this.url + '/' + id;
        return this.http.delete(_url, { headers: this.getToken() });
    }

    download() {
        var _url = this.url + '/template';
        return this.http.get(_url, { headers: this.getToken() });
    }

    import() {

    }

    export() {

    }

    getToken() {
        //var token = sessionStorage.getItem('id_token');
        let headers = new Headers();
        //headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //if(token) headers.append('Authorization', 'Bearer '+token);
        return headers;
    }
}