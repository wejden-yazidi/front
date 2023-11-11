import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JournallRoutingModule } from "./journall-routing.module";
import { ListJournallComponent } from "./list-journall/list-journall.component";
import { TableModule } from "primeng/table";
import { AjouterJournallComponent } from "./ajouter-journall/ajouter-journall.component";
import { ToastModule } from "primeng/toast";
import { HttpClientModule } from "@angular/common/http";
import { ModifierJournallComponent } from "./modifier-journall/modifier-journall.component";
import { NbCardModule } from "@nebular/theme";

@NgModule({
  declarations: [
    ListJournallComponent,
    AjouterJournallComponent,
    ModifierJournallComponent,
  ],
  imports: [
    JournallRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    TableModule,
    ToastModule,
    HttpClientModule,
    NbCardModule,
  ],
  providers: [],
})
export class JournallModule {}
