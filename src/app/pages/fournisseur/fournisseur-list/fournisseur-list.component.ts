import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Fournisseur } from "../../../@core/data/Fournisseur";
import { FournisseurService } from "../../../@core/service/fournisseur.service";

@Component({
  selector: "ngx-fournisseur-list",
  templateUrl: "./fournisseur-list.component.html",
  styleUrls: ["./fournisseur-list.component.scss"],
})
export class FournisseurListComponent implements OnInit {
  listFournisseur: Fournisseur[];
  id: string;
  ListDesIdTypeFournisseur: string[] = [];
  closeResult: string;

  constructor(
    private fournisseurService: FournisseurService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  ajouter() {
    this.router.navigate(["/pages/fournisseur/ajouter"]);
  }

  update(id: string) {
    this.router.navigate(["/pages/fournisseur/modifier", id]);
  }

  open(content: any, id: string) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
          if (result === "yes") {
            this.deleteHero(id);
          }
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  deleteHero(id: string) {
    this.fournisseurService.delete(id).subscribe(
      (data) => {
        console.log(data);
        this.getAll();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        if (err.status == 500) this.getAll();
      }
    );
  }

  getAll() {
    this.fournisseurService.getAllFournisseur().subscribe((data) => {
      this.listFournisseur = data;
      console.log(this.listFournisseur);
    });
  }
}
