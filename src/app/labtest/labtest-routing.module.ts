import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabtestPage } from './labtest.page';

const routes: Routes = [
  {
    path: '',
    component: LabtestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabtestPageRoutingModule {}
