import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Compte } from "../../../@core/data/Compte";
import { CompteService } from "../../../@core/service/compte.service";

@Component({
  selector: "ngx-ajouter-compte",
  templateUrl: "./ajouter-compte.component.html",
  styleUrls: ["./ajouter-compte.component.scss"],
})
export class AjouterCompteComponent implements OnInit {
  Compte: Compte = new Compte();
  ListParent: any = [];
  listeComptes = [];
  constructor(private CompteService: CompteService, private router: Router) {}

  ngOnInit(): void {
    this.CompteService.getAllCompte().subscribe((data) => {
      console.log("compte", data);
      this.listeComptes = data;
      this.listeComptes.forEach((element: any) => {
        if (element.idParent == "0") {
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
      console.log("list", this.listeComptes);

      console.log("this.ListParent With Children", this.ListParent);
    });
  }

  saveCompte() {
    this.CompteService.createCompte(this.Compte).subscribe(
      (data) => {
        console.log(data);
        this.annuler();
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    console.log(this.Compte);
    this.saveCompte();
  }

  annuler() {
    this.router.navigate(["/pages/compte/compte"]);
  }
}
