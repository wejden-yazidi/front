import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FournisseurListComponent } from "./fournisseur-list/fournisseur-list.component";
import { FournisseurAjouterComponent } from "./fournisseur-ajouter/fournisseur-ajouter.component";
import { FournisseurModifierComponent } from "./fournisseur-modifier/fournisseur-modifier.component";
import { FournisseurRoutingModule } from "./fournisseur-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [
    FournisseurListComponent,
    FournisseurAjouterComponent,
    FournisseurModifierComponent,
  ],
  imports: [
    FournisseurRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    NbCardModule
  ],
})
export class FournisseurModule {}
