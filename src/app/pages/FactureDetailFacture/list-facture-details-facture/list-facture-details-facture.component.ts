import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmationService, MessageService } from "primeng/api";
import { DetailFacture } from "../../../@core/data/DetailFacture";
import { Facture } from "../../../@core/data/Facture";
import { FactureDetailService } from "../../../@core/data/factureDetail.service";

@Component({
  selector: "ngx-list-facture-details-facture",
  templateUrl: "./list-facture-details-facture.component.html",
  styleUrls: ["./list-facture-details-facture.component.scss"],
  providers: [MessageService],
})
export class ListFactureDetailsFactureComponent implements OnInit {
  numFacture: string;
  display: boolean = false;
  submitted: boolean;
  listDetails: any[] = [];
  date: Date = new Date();
  facture: Facture = new Facture();
  detailFacture = new DetailFacture();
  factureForm: FormGroup = new FormGroup({
    client: new FormControl("", Validators.required),
    numFacture: new FormControl("", Validators.required),
    dateCreation: new FormControl("", Validators.required),
    observation: new FormControl("", Validators.required),
    adresse: new FormControl("", Validators.required),
  });
  detailFactureForm: FormGroup = new FormGroup({
    remise: new FormControl("", Validators.required),
    prix: new FormControl("", Validators.required),
    Tva: new FormControl("", Validators.required),
    quantite: new FormControl("", Validators.required),
    designation: new FormControl("", Validators.required),
  });
  constructor(
    private facturedetailService: FactureDetailService,
    private route: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.facturedetailService.getAllFacture().subscribe((res) => {
      this.numFacture = this.date
        .toDateString()
        .substring(11)
        .concat("-F-")
        .concat((res.length + 1).toString());
      console.log(this.numFacture);
      this.factureForm.value.numFacture = this.numFacture;
    });
  }
  annuler() {
    this.route.navigate(["/pages/facture/list-facture-compta"]);
  }
  submit() {
   
    this.submitted = true;
    this.mapFormFacture(); 
    if (this.factureForm.invalid) {
      return;
    }
    console.log
    if (this.listDetails.length == 0) {
      this.messageService.add({
        severity: "warn",
        detail: "ajouter au moins 1 détail facture",
        summary: "warning",
        life: 2000,
      });
    } else {
      this.facturedetailService.create(this.facture).subscribe((res) => {
        console.log(this.facture)
        console.log(res["id"]);
        console.log(res);

        this.facturedetailService
          .ajouterFactureavecDetails(res["id"], this.listDetails)
          .subscribe((res) => {
            console.log(res);
            
          });
      });
      this.route.navigate(["/pages/facture/list-facture-compta"]);
    }
  }
  ajouterDetailFacture(detailFacture: DetailFacture) {
    let det = { ...detailFacture };
    // this.mapFormDetailFacture();
    this.listDetails.push(det);
    this.display = false;
    console.log(this.detailFacture);
    console.log(this.listDetails);
  }
  afficherDialogDetailFacture() {
    this.display = true;
  }
  mapFormDetailFacture() {
    this.detailFacture = this.detailFactureForm.value;
    this.detailFacture.prix = this.detailFactureForm.value.prix;
    this.detailFacture.tva = this.detailFactureForm.value.Tva;
    this.detailFacture.quantite = this.detailFactureForm.value.quantite;
    this.detailFacture.designation = this.detailFactureForm.value.designation;
  }
  supprimerUnDetail(index) {
    this.listDetails.splice(index, 1);
  }
  mapFormFacture() {
    this.facture.client = this.factureForm.value.client;
    this.facture.dateCreation = this.factureForm.value.dateCreation;
    this.facture.number = this.numFacture;
    this.facture.observation = this.factureForm.value.observation;
    this.facture.adresse = this.factureForm.value.adresse;
    this.facture.montant = this.factureForm.value.montant;
  }
}
