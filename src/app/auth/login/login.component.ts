import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from "app/_services/auth.service";
import { ProfileService } from "app/_services/profile.service";
import { XI } from "app/xi.global";

@Component({
    templateUrl: './login.html'
})

export class LoginComponent implements OnInit {
    message: string;

    constructor(private $auth: AuthService, private $profile: ProfileService, private $router: Router) {
        this.setMessage();

        if ($auth.isLoggedIn()) {
            this.$profile.get().subscribe((res: any) => {
                var _data = res.json();
                sessionStorage.removeItem('profile');
                sessionStorage.setItem('profile', JSON.stringify(_data));

                // this.$router.navigate(['/']);
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.$auth.redirectUrl ? this.$auth.redirectUrl : '/pivot/dashboard';


                // Set our navigation extras object
                // that passes on our global query params and fragment
                let navigationExtras: NavigationExtras = {
                    queryParamsHandling: 'preserve',
                    preserveFragment: true
                };

                // Redirect the user
                this.$router.navigate([redirect], navigationExtras);
            }, (error: any) => {
                //Oms.showMsg("network error");
                if (error.status == 401) sessionStorage.clear();
                return;
            });
        }
    }

    ngOnInit() {

    }

    setMessage() {
        this.message = 'Logged ' + (this.$auth.isLoggedIn() ? 'in' : 'out');
    }

    login() {
        this.message = 'Trying to log in ...';

        this.$auth.SignIn({
            grant_type: 'password',
            username: 'admin',
            password: '123456'
        }).then(_data => {
            this.setMessage();
            if (this.$auth.isLoggedIn()) {

                this.$profile.get().subscribe(res => {
                    var _data = res.json();

                    sessionStorage.removeItem('profile');
                    sessionStorage.setItem('profile', JSON.stringify(_data));
                    // this.$router.navigate(['/']);
                    // Get the redirect URL from our auth service
                    // If no redirect has been set, use the default
                    // let redirect = this.$auth.redirectUrl ? this.$auth.redirectUrl : '/pivot';
                    let redirect = '/pivot/dashboard';

                    // Set our navigation extras object
                    // that passes on our global query params and fragment
                    let navigationExtras: NavigationExtras = {
                        queryParamsHandling: 'preserve',
                        preserveFragment: true
                    };

                    // Redirect the user
                    this.$router.navigate([redirect], navigationExtras);
                }, function (error) {
                    XI.showMsg("get profile error");
                    return;
                });

            }
        }, _err => { });
    }


    logout() {
        this.$auth.SignOut();

        // Redirect the user
        this.$router.navigate(['/login']);
    }

    chooseLanguage(lang: any) {
        this.$profile.post({ language: lang }).subscribe((res: any) => {
            localStorage.language = lang;
            location.reload();
        }, (error) => {
            localStorage.language = lang;
            location.reload();
        });
    }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/