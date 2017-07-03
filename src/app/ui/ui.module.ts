import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIComponent } from './ui.component';
import { UIRoutingModule } from './ui-routing.module';
import { CommonModule } from "@angular/common";
import { ShareModule } from "app/share.module";
import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    UIComponent
  ],
  imports: [
    FlexLayoutModule,
    CommonModule,
    ShareModule,
    UIRoutingModule
  ],
  providers: []
})
export class UIModule { }
