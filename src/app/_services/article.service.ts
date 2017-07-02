/**
 * Created by zero on 7/19/16.
 */
import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestMethod, RequestOptions, URLSearchParams } from '@angular/http';
import { Subject, Observable } from 'rxjs/Rx';
import { XI } from "app/xi.global";

@Injectable()
export class ArticleService {
    url: string;

    constructor(private http: Http) {
        this.url = `${XI.location}/api/articles`;
    }

    all() {
        return this.http.get(this.url, { headers: XI.getToken() });
    }

    get(id: any) {
        var _url = `${this.url}/${id}`;
        return this.http.get(_url, { headers: XI.getToken() });
    }

    getBy(category: any, id: any) {
        var _url = this.url + '/{category}/{id}'.replace('{category}', category).replace('{id}', id);
        return this.http.get(_url, { headers: XI.getToken() });
    }

    post(node: any) {
        var _headers = XI.getToken();
        var options = { headers: _headers };
        return this.http.post(this.url, JSON.stringify(node), options);
    }

    put(node: any) {
        var _url = `${this.url}/${node.Id}`;
        return this.http.put(_url, JSON.stringify(node), { headers: XI.getToken() });
    }

    unlock(node: any, status: any) {
        var _url = `${this.url}/${node.Id}/unlock/${status}`;
        return this.http.post(_url, {}, { headers: XI.getToken() });
    }

    copy(node: any) {
        var _url = this.url + '/{id}/copy/{uid}'.replace('{id}', node.SourceID).replace('{uid}', node.TargetID);
        return this.http.post(_url, {}, { headers: XI.getToken() });
    }

    patch(id: any, data: any) {
        var _url = this.url + '/{id}'.replace('{id}', id);
        return this.http.patch(_url, JSON.stringify(data), { headers: XI.getToken() });
    }

    delete(id: any) {
        var _url = this.url + '/' + id;
        return this.http.delete(_url, { headers: XI.getToken() });
    }

    deletes(node: any) {
        var _url = this.url + '/batch';
        var opts = new RequestOptions();
        opts.body = JSON.stringify({ uids: node });
        opts.headers = XI.getToken();
        opts.method = RequestMethod.Delete;
        opts.url = _url;
        return this.http.request(new Request(opts));
    }

    download() {
        var _url = this.url + '/template';
        return this.http.get(_url, { headers: XI.getToken() });
    }

    import() {

    }

    export() {

    }

}