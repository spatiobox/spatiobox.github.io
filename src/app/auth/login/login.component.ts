import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from "app/_services/auth.service";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {
    message: string;

    constructor(public $auth: AuthService, public router: Router) {
        this.setMessage();
    }

    setMessage() {
        this.message = 'Logged ' + (this.$auth.isLoggedIn ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';

        this.$auth.post({}).subscribe(() => {
            this.setMessage();
            if (this.$auth.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.$auth.redirectUrl ? this.$auth.redirectUrl : '/pivot';

                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };

                // Redirect the user
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }

    logout() {
        this.$auth.logout();
        this.setMessage();
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/