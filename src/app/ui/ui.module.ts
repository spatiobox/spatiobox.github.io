import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIComponent } from './ui.component';
import { UIRoutingModule } from './ui-routing.module';
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    UIComponent
  ],
  imports: [
    CommonModule,
    UIRoutingModule
  ],
  providers: []
})
export class UIModule { }
