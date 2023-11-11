import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Fournisseur } from "../../../@core/data/Fournisseur";
import { FournisseurService } from "../../../@core/service/fournisseur.service";

@Component({
  selector: "ngx-modifier-fournisseur",
  templateUrl: "./fournisseur-modifier.component.html",
  styleUrls: ["./fournisseur-modifier.component.scss"],
})
export class FournisseurModifierComponent implements OnInit {
  id: string;
  Fournisseur: Fournisseur = new Fournisseur();

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.fournisseurService.getFournisseurId(this.id).subscribe(
      (data) => {
        this.Fournisseur = data;
      },
      (error) => {
        console.log(error);
        this.goToFournisseurList();
      }
    );
  }
  onSubmit() {
    this.fournisseurService.update(this.id, this.Fournisseur).subscribe(
      (data) => {
        this.goToFournisseurList();
      },
      (error) => console.log(error)
    );
  }

  deleteFournisseur() {
    this.fournisseurService
      .delete(this.Fournisseur.idFournisseur)
      .subscribe((data) => {
        console.log(data);
        this.goToFournisseurList();
      });
  }

  goToFournisseurList() {
    this.router.navigate(["/pages/fournisseur/fournisseur"]);
  }
}
