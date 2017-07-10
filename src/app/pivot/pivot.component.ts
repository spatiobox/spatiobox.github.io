import { Component, ViewEncapsulation } from '@angular/core';
import { AuthService } from "app/_services/auth.service";
import { Router, NavigationExtras } from "@angular/router";

@Component({
    templateUrl: './pivot.component.html'
    // encapsulation: ViewEncapsulation.None
})
export class PivotComponent {
    navs = [];
    constructor(private $auth: AuthService, private $router: Router) {

        console.log('oh my god pivot')
    }

    logout() {
        this.$auth.SignOut();

        // let redirect = this.$auth.redirectUrl ? this.$auth.redirectUrl : '/login';
        let redirect = '/login';

        // Set our navigation extras object
        // that passes on our global query params and fragment
        let navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
        };

        // Redirect the user
        this.$router.navigate([redirect], navigationExtras);
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/