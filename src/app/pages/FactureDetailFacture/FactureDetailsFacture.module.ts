import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbCardModule, NbInputModule } from "@nebular/theme";
import { ButtonModule } from "primeng/button";
import { DialogModule } from "primeng/dialog";
import { FieldsetModule } from "primeng/fieldset";
import { TableModule } from "primeng/table";
import { ToastModule } from "primeng/toast";
import { FactureDetailsFactureRouting } from "./FactureDetailsFacture-routing.module";
import { ListFactureDetailsFactureComponent } from "./list-facture-details-facture/list-facture-details-facture.component";
import { ListFacturesComptaComponent } from "./list-factures-compta/list-factures-compta.component";
import { ModifierFactureDetailsComponent } from './modifier-facture-details/modifier-facture-details.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    ListFactureDetailsFactureComponent,
    ListFacturesComptaComponent,
    ModifierFactureDetailsComponent,
    DetailsComponent,
  ],
  imports: [
    FactureDetailsFactureRouting,
    ReactiveFormsModule,
    CommonModule,
    NbCardModule,
    ToastModule,
    DialogModule,
    NbInputModule,
    FormsModule,
    TableModule,
    ButtonModule,
    FieldsetModule,
    ToastModule,
    ConfirmDialogModule
    
  ],
})
export class FactureDetailsFactureModule {}
