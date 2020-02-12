import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutingModule } from './routing.module';

import { PosSalesListComponent } from './possaleslist/possaleslist.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseListComponent } from './purchaselist/purchaselist.component';

const COMPONENTS = [ PosSalesListComponent,PurchaseComponent,PurchaseListComponent];
const COMPONENTS_DYNAMIC = [];

@NgModule({
  imports: [SharedModule, RoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC],
  entryComponents: COMPONENTS_DYNAMIC,
})
export class AccountingModule {}
