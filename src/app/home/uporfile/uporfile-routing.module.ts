import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UporfilePage } from './uporfile.page';

const routes: Routes = [
  {
    path: '',
    component: UporfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UporfilePageRoutingModule {}
