import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestAppsPage } from './test-apps.page';

const routes: Routes = [
  {
    path: '',
    component: TestAppsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestAppsPageRoutingModule {}
