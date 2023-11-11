import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailsComponent } from "./details/details.component";
import { ListFactureDetailsFactureComponent } from "./list-facture-details-facture/list-facture-details-facture.component";
import { ListFacturesComptaComponent } from "./list-factures-compta/list-factures-compta.component";
import { ModifierFactureDetailsComponent } from "./modifier-facture-details/modifier-facture-details.component";

const routes: Routes = [
  {
    path: "list-facture-details",
    component: ListFactureDetailsFactureComponent,
  },
  {
    path: "list-facture-compta",
    component: ListFacturesComptaComponent,
  },
  {
    path: "modifier-facture-details/:id",
    component: ModifierFactureDetailsComponent,
  },
  {
    path: "list-details/:id",
    component: DetailsComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactureDetailsFactureRouting {}
