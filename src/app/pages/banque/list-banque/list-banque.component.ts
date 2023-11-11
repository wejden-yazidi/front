import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CompteBancaire } from "../../../@core/data/CompteBancaire";
import { CompteBancaireService } from "../../../@core/service/comptebancaire.service";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "ngx-list-banque",
  templateUrl: "./list-banque.component.html",
  styleUrls: ["./list-banque.component.scss"],
  providers: [],
})
export class ListCompteBancaireComponent implements OnInit {
  listCompteBancaire: CompteBancaire[];
  id: string;
  ListDesIdTypeCompteBancaire: string[] = [];
  closeResult: string;

  constructor(
    private banqueService: CompteBancaireService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  ajouter() {
    this.router.navigate(["/pages/banque/ajouter"]);
  }

  update(id: string) {
    this.router.navigate(["/pages/banque/modifier", id]);
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
    this.banqueService.deleteCompteBancaire(id).subscribe(
      (data) => {
        console.log(data);
        this.getAll();
      },
      (err: HttpErrorResponse) => {
        if (err.status == 500) this.getAll();
      }
    );
  }

  getAll() {
    this.banqueService.getAllCompteBancaire().subscribe((data) => {
      this.listCompteBancaire = data;
      console.log(this.listCompteBancaire);
    });
  }
}
