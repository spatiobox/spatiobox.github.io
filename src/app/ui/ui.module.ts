import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIComponent } from './ui.component';
import { UIRoutingModule } from './ui-routing.module';


@NgModule({
  declarations: [
    UIComponent
  ],
  imports: [
    UIRoutingModule
  ],
  providers: []
})
export class UIModule { }
