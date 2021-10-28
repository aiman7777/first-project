import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask8P2PageRoutingModule } from './labtask8-p2-routing.module';

import { Labtask8P2Page } from './labtask8-p2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask8P2PageRoutingModule
  ],
  declarations: [Labtask8P2Page]
})
export class Labtask8P2PageModule {}
