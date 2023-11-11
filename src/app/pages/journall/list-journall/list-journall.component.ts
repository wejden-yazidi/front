import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Journall } from "../../../@core/data/Journall";
import { JournallService } from "../../../@core/service/journall.service";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngx-list-journall",
  templateUrl: "./list-journall.component.html",
  styleUrls: ["./list-journall.component.scss"],
  providers: [],
})
export class ListJournallComponent implements OnInit {
  listJournall: Journall[];
  id: string;
  ListDesIdTypeJournal: string[] = [];
  closeResult: string;

  constructor(
    private journallService: JournallService,
    private router: Router,
    private modalService: NgbModal
  ) {}
  ngOnInit(): void {
    this.getAll();
  }
  ajouter() {
    this.router.navigate(["/pages/journall/ajouter"]);
  }

  update(id: string) {
    this.router.navigate(["/pages/journall/modifier", id]);
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
    this.journallService.delete(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    });
  }

  getAll() {
    this.journallService.getAllJournall().subscribe((data) => {
      this.listJournall = data;
      console.log(this.listJournall);
    });
  }
}

