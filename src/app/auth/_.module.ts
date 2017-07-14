import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from "app/auth/_.routing";
import { LoginComponent } from "app/auth/login/login.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthService } from "app/_services/auth.service";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from './register/register.component';
import { AuthLayout } from "app/auth/_.layout";
import { ShareModule } from "app/share.module";
import { ForgotComponent } from "app/auth/forgot/forgot.component";


@NgModule({
    declarations: [
        AuthLayout,
        LoginComponent,
        RegisterComponent,
        ForgotComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        AuthRoutingModule
    ],
    providers: [
        AuthGuard,
        AuthService
    ],
    exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
