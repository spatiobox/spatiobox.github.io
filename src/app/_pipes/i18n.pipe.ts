/**
 * Created by zero on 7/19/16.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { XI } from "app/xi.global";

@Pipe({ name: 'i18n' })
export class I18nPipe implements PipeTransform {
    constructor() {
    }
    transform(value: any, args: any): string {
        if (!value) return value;
        if (!XI.Region[XI.lang]) return value;
        var spliter = XI.lang == 'en-US' ? ' ' : '';
        var arr = value.split(' ');
        var result = '';
        arr.forEach(function (item: any) {
            result += spliter + (XI.Region[XI.lang][item] || value);
        });

        return result;
    }
}