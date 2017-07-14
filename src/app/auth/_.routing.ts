import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "app/auth/login/login.component";
import { AuthService } from "app/_services/auth.service";
import { RegisterComponent } from "app/auth/register/register.component";
import { AuthLayout } from "app/auth/_.layout";
import { ForgotComponent } from "app/auth/forgot/forgot.component";



const AuthRoutes: Routes = [
    {
        path: '',
        component: AuthLayout,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'forgot', component: ForgotComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(AuthRoutes)],
    exports: [RouterModule],
    providers: [AuthService]
})
export class AuthRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/