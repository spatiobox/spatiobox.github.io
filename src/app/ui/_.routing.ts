import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UIComponent } from "app/ui/ui.component";
import { UILayout } from "app/ui/_.layout";

const routes: Routes = [
  {
    path: '',
    component: UILayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: UIComponent
      },
      {
        path: '**',
        component: UIComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
