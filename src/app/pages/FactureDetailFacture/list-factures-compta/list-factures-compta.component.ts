import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService, SortEvent } from "primeng/api";
import { Facture } from "../../../@core/data/Facture";
import { FactureDetailService } from "../../../@core/data/factureDetail.service";


@Component({
  selector: "ngx-list-factures-compta",
  templateUrl: "./list-factures-compta.component.html",
  styleUrls: ["./list-factures-compta.component.scss"],
  providers:[MessageService,ConfirmationService]
})
export class ListFacturesComptaComponent implements OnInit {
  res: any[];
  display: boolean = false;
  idFactureAafficher: string;
  constructor(
    private serivceFacture: FactureDetailService,
    private route: Router,
    private ConfirmationService:ConfirmationService
  ) {}
  facturesCompta: Facture[];
  first: number;
  ngOnInit(): void {
    this.serivceFacture.getAllFacture().subscribe((res) => {
      this.facturesCompta = res;
      console.log("les factures", this.facturesCompta);
    });
  }
  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
      let value1 = data1[event.field];
      let value2 = data2[event.field];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === "string" && typeof value2 === "string")
        result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.order * result;
    });
  }
  ajouter() {
    this.route.navigate(["pages/facture/list-facture-details"]);
  }
  supprimer(id:string) {
    this.ConfirmationService.confirm({
      message:'etes vous sur de supprimer cette facture ?',
      accept:()=>{
        this.serivceFacture.delete(id).subscribe((res) => {
          this.serivceFacture.getAllFacture().subscribe((res) => {
            this.facturesCompta = res;
            console.log(res);
            this.res = res;
          });
        });
      }
    })
    
    
  }
  modifier(id) {
    this.route.navigate([
      "pages/factureEtDetails/modifier-facture-details/" + id,
    ]);
  }
  afficherDetailsFacture(id) {
    this.display = true;
    console.log(id);
    this.serivceFacture.getDetailsByIdFacture(id).subscribe((res) => {
      console.log(res);
      this.res = res;
    });
  }
}
