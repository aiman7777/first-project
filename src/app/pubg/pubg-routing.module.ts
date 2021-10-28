import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PubgPage } from './pubg.page';

const routes: Routes = [
  {
    path: '',
    component: PubgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PubgPageRoutingModule {}
