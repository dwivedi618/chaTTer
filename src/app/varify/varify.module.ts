import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VarifyPageRoutingModule } from './varify-routing.module';

import { VarifyPage } from './varify.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VarifyPageRoutingModule
  ],
  declarations: [VarifyPage]
})
export class VarifyPageModule {}
