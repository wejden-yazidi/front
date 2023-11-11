import { Component, OnInit } from "@angular/core";
import { TreeNode } from "primeng/api";
import { CompteService } from "../../../@core/service/compte.service";
import { Router } from "@angular/router";
import { TreeModule } from "primeng/tree";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngx-list-compte",
  templateUrl: "./list-compte.component.html",
  styleUrls: ["./list-compte.component.scss"],
})
export class ListCompteComponent implements OnInit {
  // filterliste:any=[];
  // files: TreeNode[];
  // compte:any;
  //     cols: Compte[]
  //     ListParent: TreeNode[];
  ListParent: any = [];
  listeComptes = [];
  closeResult: string;

  constructor(
    private CompteService: CompteService,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.CompteService.getAllCompte().subscribe((data) => {
      console.log("compte", data);
      this.listeComptes = data;
      this.ListParent = [];
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

  ajouter() {
    this.router.navigate(["/pages/compte/ajouter"]);
  }

  expandAll() {
    this.ListParent.forEach((node) => {
      this.expandRecursive(node, true);
    });
  }

  collapseAll() {
    this.ListParent.forEach((node) => {
      this.expandRecursive(node, false);
    });
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
    this.CompteService.deleteCompte(id).subscribe((data) => {
      console.log(data);
      this.getAll();
    });
  }

  update(id: string) {
    this.router.navigate(["/pages/compte/modifier", id]);
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach((childNode) => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }
}
