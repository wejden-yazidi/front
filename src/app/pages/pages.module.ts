import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { CompteComponent } from './compte/compte.component';
import { ComptebancaireComponent } from './comptebancaire/comptebancaire.component';
import { ExerciceComponent } from './exercice/exercice.component';
import { DeviseComponent } from './devise/devise.component';

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
    CompteComponent,
    ComptebancaireComponent,
    ExerciceComponent,
    DeviseComponent,
  ],
})
export class PagesModule {
}
