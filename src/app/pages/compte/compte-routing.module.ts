import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListCompteComponent } from "./list-compte/list-compte.component";
const routes: Routes = [    {path:"compte",
component:ListCompteComponent},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompteRoutingModule {
}