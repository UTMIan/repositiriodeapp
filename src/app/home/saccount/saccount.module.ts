import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaccountPageRoutingModule } from './saccount-routing.module';

import { SaccountPage } from './saccount.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaccountPageRoutingModule
  ],
  declarations: [SaccountPage]
})
export class SaccountPageModule {}
