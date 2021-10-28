import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask8Page } from './labtask8.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask8PageRoutingModule {}
