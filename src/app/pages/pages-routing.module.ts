import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { PagesComponent } from "./pages.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./miscellaneous/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",

    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: ECommerceComponent,
      },

      {
        path: "forms",
        loadChildren: () =>
          import("./forms/forms.module").then((m) => m.FormsModule),
      },

      {
        path: "maps",
        loadChildren: () =>
          import("./maps/maps.module").then((m) => m.MapsModule),
      },
      {
        path: "journall",
        loadChildren: () =>
          import("./journall/journall.module").then((m) => m.JournallModule),
      },
      {
        path: "compte",
        loadChildren: () =>
          import("./compte/compte.module").then((m) => m.CompteModule),
      },
      {
        path: "banque",
        loadChildren: () =>
          import("./banque/banque.module").then((m) => m.CompteBancaireModule),
      },
      {
        path: "fournisseur",
        loadChildren: () =>
          import("./fournisseur/fournisseur.module").then(
            (m) => m.FournisseurModule
          ),
      },
      {
        path: "facture",
        loadChildren: () =>
          import("./FactureDetailFacture/FactureDetailsFacture.module").then((m) => m.FactureDetailsFactureModule),
      },

      {
        path: "miscellaneous",
        loadChildren: () =>
          import("./miscellaneous/miscellaneous.module").then(
            (m) => m.MiscellaneousModule
          ),
      },
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full",
      },
      {
        path: "**",
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
