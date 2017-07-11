import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIComponent } from './ui.component';
import { UIRoutingModule } from './_.routing';
import { CommonModule } from "@angular/common";
import { ShareModule } from "app/share.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UILayout } from "app/ui/_.layout";


@NgModule({
  declarations: [
    UILayout,
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
