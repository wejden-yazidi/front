import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Fournisseur } from "../../../@core/data/Fournisseur";
import { FournisseurService } from "../../../@core/service/fournisseur.service";

@Component({
  selector: "ngx-ajouter-fournisseur",
  templateUrl: "./fournisseur-ajouter.component.html",
  styleUrls: ["./fournisseur-ajouter.component.scss"],
  providers: [],
})
export class FournisseurAjouterComponent implements OnInit {
  Fournisseur: Fournisseur = new Fournisseur();

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveFournisseur() {
    this.fournisseurService.create(this.Fournisseur).subscribe(
      (data) => {
        console.log(data);
        this.goToFournisseurList();
      },
      (error) => console.log(error)
    );
  }

  goToFournisseurList() {
    this.router.navigate(["/pages/fournisseur/fournisseur"]);
  }

  onSubmit() {
    console.log(this.Fournisseur);
    this.saveFournisseur();
  }
}
