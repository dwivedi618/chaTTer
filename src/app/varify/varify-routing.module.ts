import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VarifyPage } from './varify.page';

const routes: Routes = [
  {
    path: '',
    component: VarifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VarifyPageRoutingModule {}
