import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompteBancaire } from "../../../@core/data/CompteBancaire";
import { CompteBancaireService } from "../../../@core/service/comptebancaire.service";

@Component({
  selector: "ngx-ajouter-banque",
  templateUrl: "./ajouter-banque.component.html",
  styleUrls: ["./ajouter-banque.component.scss"],
  providers: [],
})
export class AjouterCompteBancaireComponent implements OnInit {
  CompteBancaire: CompteBancaire = new CompteBancaire();

  constructor(
    private banqueService: CompteBancaireService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveCompteBancaire() {
    this.banqueService.createCompteBancaire(this.CompteBancaire).subscribe(
      (data) => {
        console.log(data);
        this.goToCompteBancaireList();
      },
      (error) => console.log(error)
    );
  }

  goToCompteBancaireList() {
    this.router.navigate(["/pages/banque/banque"]);
  }

  onSubmit() {
    console.log(this.CompteBancaire);
    this.saveCompteBancaire();
  }
}
