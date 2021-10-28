import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Labtask7PageRoutingModule } from './labtask7-routing.module';

import { Labtask7Page } from './labtask7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Labtask7PageRoutingModule
  ],
  declarations: [Labtask7Page]
})
export class Labtask7PageModule {}
