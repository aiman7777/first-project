import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Labtask8P2Page } from './labtask8-p2.page';

const routes: Routes = [
  {
    path: '',
    component: Labtask8P2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Labtask8P2PageRoutingModule {}
