import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Facture } from "../../../@core/data/Facture";
import { FactureDetailService } from "../../../@core/data/factureDetail.service";

@Component({
  selector: "ngx-modifier-facture-details",
  templateUrl: "./modifier-facture-details.component.html",
  styleUrls: ["./modifier-facture-details.component.scss"],
})
export class ModifierFactureDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceFacture: FactureDetailService,
    private route: Router
  ) {}
  submitted: boolean;
  id: string;
  f: Facture = new Facture();
  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params);
    this.id = this.activatedRoute.snapshot.params.id;
    this.serviceFacture.getFactureId(this.id).subscribe((res) => {
      console.log(res);
      this.f = res;
      this.factureForm = new FormGroup({
        client: new FormControl(res["client"], Validators.required),
        numFacture: new FormControl(res["number"], Validators.required),
        dateCreation: new FormControl(res["dateCreation"], Validators.required),
        observation: new FormControl(res["observation"], Validators.required),
        adresse: new FormControl(res["adresse"], Validators.required),
      });
    });
  }
  submit() {
    this.mapValuesToForm();
    this.submitted = true;
    if (this.factureForm.invalid) {
      return;
    } else {
      this.serviceFacture.update(this.id, this.f).subscribe((res) => {
        console.log(res);
      });
      this.route.navigate(["/pages/factureEtDetails/list-facture-compta"]);
    }
  }
  factureForm: FormGroup = new FormGroup({
    client: new FormControl("", Validators.required),
    numFacture: new FormControl("", Validators.required),
    dateCreation: new FormControl("", Validators.required),
    observation: new FormControl("", Validators.required),
    adresse: new FormControl("", Validators.required),
  });
  mapValuesToForm() {
    this.f.client = this.factureForm.value.client;
    this.f.number = this.factureForm.value.numFacture;
    this.f.adresse = this.factureForm.value.adresse;
    this.f.observation = this.factureForm.value.observation;
    this.f.dateCreation = this.factureForm.value.dateCreation;
  }
  annuler() {
    this.route.navigate(["/pages/factureEtDetails/list-facture-compta"]);
  }
}
