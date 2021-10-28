import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask5Page } from './labtask5.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask5PageRoutingModule {}
