import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask8PageRoutingModule } from './labtask8-routing.module';

import { Labtask8Page } from './labtask8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask8PageRoutingModule
  ],
  declarations: [Labtask8Page]
})
export class Labtask8PageModule {}
