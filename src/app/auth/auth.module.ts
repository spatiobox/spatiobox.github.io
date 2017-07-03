import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { LoginComponent } from "app/auth/login/login.component";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthService } from "app/_services/auth.service";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from './register/register.component';
import { ShareModule } from "app/share.module";

@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
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
