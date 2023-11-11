import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AjouterCompteComponent } from "./ajouter-compte/ajouter-compte.component";
import { ListCompteComponent } from "./list-compte/list-compte.component";
import { ModifierCompteComponent } from "./modifier-compte/modifier-compte.component";

const routes: Routes = [
  { path: "compte", component: ListCompteComponent },
  { path: "ajouter", component: AjouterCompteComponent },
  { path: "modifier/:id", component: ModifierCompteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteRoutingModule {}
