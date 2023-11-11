import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CompteBancaire } from "../../../@core/data/CompteBancaire";
import { CompteBancaireService } from "../../../@core/service/comptebancaire.service";

@Component({
  selector: "ngx-modifier-banque",
  templateUrl: "./modifier-banque.component.html",
  styleUrls: ["./modifier-banque.component.scss"],
})
export class ModifierCompteBancaireComponent implements OnInit {
  id: string;
  CompteBancaire: CompteBancaire = new CompteBancaire();

  constructor(
    private banqueService: CompteBancaireService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.banqueService.getCompteBancaireId(this.id).subscribe(
      (data) => {
        this.CompteBancaire = data;
      },
      (error) => {
        console.log(error);
        this.goToCompteBancaireList();
      }
    );
  }
  onSubmit() {
    console.log(this.id, this.CompteBancaire);
    this.banqueService
      .updateCompteBancaire(this.id, this.CompteBancaire)
      .subscribe(
        (data) => {
          this.goToCompteBancaireList();
        },
        (error) => console.log(error)
      );
  }

  deleteCompteBancaire() {
    this.banqueService
      .deleteCompteBancaire(this.CompteBancaire.id)
      .subscribe((data) => {
        console.log(data);
        this.goToCompteBancaireList();
      });
  }

  goToCompteBancaireList() {
    this.router.navigate(["/pages/banque/banque"]);
  }
}

//   modifierCompteBancaire():void {
//     this.banqueService.create(this.CompteBancaire).subscribe(
//       response => {
//         console.log(response);
//         this.submitted = true;
//       },
//       error => {
//         console.log(error);
//       });
// }
//   annuler(){
//     this.router.navigate(["/pages/banque/banque"])
//   }
// }
