import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompteBancaireRoutingModule } from "./banque-routing.module";
import { ListCompteBancaireComponent } from "./list-banque/list-banque.component";
import { TableModule } from "primeng/table";
import { AjouterCompteBancaireComponent } from "./ajouter-banque/ajouter-banque.component";
import { ToastModule } from "primeng/toast";
import { HttpClientModule } from "@angular/common/http";
import { ModifierCompteBancaireComponent } from "./modifier-banque/modifier-banque.component";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [
    ListCompteBancaireComponent,
    AjouterCompteBancaireComponent,
    ModifierCompteBancaireComponent,
  ],
  imports: [
    CompteBancaireRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    NbCardModule
  ],
  providers: [],
})
export class CompteBancaireModule {}
