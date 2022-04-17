import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFactureComponent } from './ajouter-facture/ajouter-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';


const routes: Routes = [
  {path:"facture",
  component:ListFactureComponent},
  {path:"ajouter", component:AjouterFactureComponent},
  // {path:"modifier", component:ModifierFactureComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }
