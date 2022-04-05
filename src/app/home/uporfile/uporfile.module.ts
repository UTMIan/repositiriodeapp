import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UporfilePageRoutingModule } from './uporfile-routing.module';

import { UporfilePage } from './uporfile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UporfilePageRoutingModule
  ],
  declarations: [UporfilePage]
})
export class UporfilePageModule {}
