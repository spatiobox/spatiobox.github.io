import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from "@angular/http";
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeModule } from "app/home/_.module";
import { PivotModule } from "app/pivot/_.module";
import { AuthService } from "app/_services/auth.service";
import { AuthGuard } from "app/_services/auth-guard.service";
import { AuthModule } from "app/auth/auth.module";
import { CommonModule } from '@angular/common';
import { UIModule } from "app/ui/ui.module";
import { ProfileService } from "app/_services/profile.service";
import { PageNotFoundComponent } from "app/page-not-found.component";
import { AppPreloadingStrategyService } from "app/_services/app-preloading-strategy.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from "app/share.module";


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    // BrowserAnimationsModule,
    ShareModule,
    BrowserAnimationsModule,
    MaterialModule,

    HttpModule,
    FormsModule,
    AppRoutingModule,

    //home
    HomeModule,
    UIModule,
    PivotModule,


    //auth
    AuthModule,

    //--pivot
    PivotModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    ProfileService,
    AppPreloadingStrategyService
  ],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {
  constructor(private router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    console.log('Routes: ', router.config);
  }
}
