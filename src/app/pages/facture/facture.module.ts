import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureRoutingModule } from './facture-routing.module';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { AjouterFactureComponent } from './ajouter-facture/ajouter-facture.component';


@NgModule({
  declarations: [
    ListFactureComponent,
    AjouterFactureComponent
  ],
  imports: [
    CommonModule,
    FactureRoutingModule
  ]
})
export class FactureModule { }
