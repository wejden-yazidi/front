import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AjouterJournallComponent } from "./ajouter-journall/ajouter-journall.component";
import { ListJournallComponent } from "./list-journall/list-journall.component";
import { ModifierJournallComponent } from "./modifier-journall/modifier-journall.component";



const routes: Routes = [
    {path:"journall",
    component:ListJournallComponent},
    {path:"ajouter", component:AjouterJournallComponent},
    {path:"modifier", component:ModifierJournallComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JournallRoutingModule {}