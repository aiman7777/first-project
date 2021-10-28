import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask7Page } from './labtask7.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask7PageRoutingModule {}
