import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask5PageRoutingModule } from './labtask5-routing.module';

import { Labtask5Page } from './labtask5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask5PageRoutingModule
  ],
  declarations: [Labtask5Page]
})
export class Labtask5PageModule {}
