import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';
import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ListFactureComponent } from './facture/list-facture/list-facture.component';
import { AjouterFactureComponent } from './facture/ajouter-facture/ajouter-facture.component';



@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    ListFactureComponent,
    AjouterFactureComponent,
  
  ],
})
export class PagesModule {
}
