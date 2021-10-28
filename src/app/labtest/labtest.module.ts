import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabtestPageRoutingModule } from './labtest-routing.module';

import { LabtestPage } from './labtest.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabtestPageRoutingModule
  ],
  declarations: [LabtestPage]
})
export class LabtestPageModule {}
