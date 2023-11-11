import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FournisseurAjouterComponent } from "./fournisseur-ajouter/fournisseur-ajouter.component";
import { FournisseurListComponent } from "./fournisseur-list/fournisseur-list.component";
import { FournisseurModifierComponent } from "./fournisseur-modifier/fournisseur-modifier.component";

const routes: Routes = [
  { path: "fournisseur", component: FournisseurListComponent },
  { path: "ajouter", component: FournisseurAjouterComponent },
  { path: "modifier/:id", component: FournisseurModifierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FournisseurRoutingModule {}
