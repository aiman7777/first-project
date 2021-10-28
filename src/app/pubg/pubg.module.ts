import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PubgPageRoutingModule } from './pubg-routing.module';

import { PubgPage } from './pubg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PubgPageRoutingModule
  ],
  declarations: [PubgPage]
})
export class PubgPageModule {}
