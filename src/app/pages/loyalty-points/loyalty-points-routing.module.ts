import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoyaltyPointsPage } from './loyalty-points.page';

const routes: Routes = [
  {
    path: '',
    component: LoyaltyPointsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoyaltyPointsPageRoutingModule {}
