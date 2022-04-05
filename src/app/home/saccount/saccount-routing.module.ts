import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaccountPage } from './saccount.page';

const routes: Routes = [
  {
    path: '',
    component: SaccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaccountPageRoutingModule {}
