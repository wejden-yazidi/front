import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Compte } from "../../../@core/data/Compte";
import { CompteService } from "../../../@core/service/compte.service";

@Component({
  selector: "ngx-modifier-compte",
  templateUrl: "./modifier-compte.component.html",
  styleUrls: ["./modifier-compte.component.scss"],
})
export class ModifierCompteComponent implements OnInit {
  Compte: Compte = new Compte();
  ListParent: any = [];
  listeComptes = [];
  constructor(
    private CompteService: CompteService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params["id"];
    this.CompteService.getAllCompte().subscribe((data) => {
      this.Compte = data.find((c) => c.id == id);
      if (!this.Compte) {
        this.annuler();
      }
      this.listeComptes = data;
      this.listeComptes.forEach((element: any) => {
        if (element.idParent == "0" && element.id != this.Compte.id) {
          var body = { ...element };
          body.label = element.numCompte;
          body.children = [];
          this.ListParent.push(body);
        }
      });
      this.listeComptes.forEach((comptes: any) => {
        this.ListParent.forEach((parents: any) => {
          if (parents.id == comptes.idParent) {
            var body = { ...comptes };
            body.children = [];
            body.label = comptes.numCompte;
            parents.children.push(body);
          }
        });
      });
    });
  }

  onSubmit() {
    this.CompteService.updateCompte(this.Compte.id, this.Compte).subscribe(
      (data) => {
        this.annuler();
      },
      (error) => console.log(error)
    );
  }

  deleteFournisseur() {
    this.CompteService.deleteCompte(this.Compte.id).subscribe((data) => {
      console.log(data);
      this.annuler();
    });
  }

  annuler() {
    this.router.navigate(["/pages/compte/compte"]);
  }
}
