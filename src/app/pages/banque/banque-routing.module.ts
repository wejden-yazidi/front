import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AjouterCompteBancaireComponent } from "./ajouter-banque/ajouter-banque.component";
import { ListCompteBancaireComponent } from "./list-banque/list-banque.component";
import { ModifierCompteBancaireComponent } from "./modifier-banque/modifier-banque.component";

const routes: Routes = [
  { path: "banque", component: ListCompteBancaireComponent },
  { path: "ajouter", component: AjouterCompteBancaireComponent },
  { path: "modifier/:id", component: ModifierCompteBancaireComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteBancaireRoutingModule {}
