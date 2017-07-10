import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { UserComponent } from "app/pivot/user/user.component";
import { UserRoutingModule } from "app/pivot/user/_.routing";
import { ShareModule } from "app/share.module";


@NgModule({
    declarations: [
        UserComponent
    ],
    imports: [
        CommonModule,
        ShareModule,
        UserRoutingModule
    ],
    providers: []
})
export class UserModule { }
