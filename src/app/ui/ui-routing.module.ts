import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UIComponent } from "app/ui/ui.component";

const routes: Routes = [
  {
    path: '',
    component: UIComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
