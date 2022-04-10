import { Component, OnInit } from '@angular/core';
import { TreeNode} from 'primeng/api';
import { CompteService } from '../../../@core/service/compte.service';
import { Router } from '@angular/router';
import {TreeModule} from 'primeng/tree';

@Component({
  selector: 'ngx-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.scss']
})
export class ListCompteComponent implements OnInit {
// filterliste:any=[];
// files: TreeNode[];
// compte:any;
//     cols: Compte[]
//     ListParent: TreeNode[];
    ListParent:any=[];
    listeComptes=[];
  

  constructor(private CompteService:CompteService, private router:Router) { 
  }

  ngOnInit(): void {
    this.CompteService.getAllCompte().subscribe(data =>{
      console.log("compte",data)
      this.listeComptes=data;
      this.listeComptes.forEach((element: any) => {
        if (element.idParent == "0") {
          var body = { ...element };
          body.label = element.numCompte
          body.children = [];
          this.ListParent.push(body)
        }
  
        
      });
      this.listeComptes.forEach((comptes: any) => {
        this.ListParent.forEach((parents: any) => {
          if (parents.id == comptes.idParent) {
            var body = { ...comptes };
            body.children = [];
            body.label = comptes.numCompte
            parents.children.push(body)
          }
        });
      });
    } )
console.log("list",this.listeComptes);
   
    

    console.log("this.ListParent With Children", this.ListParent)
  }
  ajouter(){
    this.router.navigate(["/pages/compte/ajouter"])
  }
 

  expandAll(){
    this.ListParent.forEach( node => {
        this.expandRecursive(node, true);
    } );
}

collapseAll(){
    this.ListParent.forEach( node => {
        this.expandRecursive(node, false);
    } );
}

private expandRecursive(node:TreeNode, isExpand:boolean){
    node.expanded = isExpand;
    if (node.children){
        node.children.forEach( childNode => {
            this.expandRecursive(childNode, isExpand);
        } );
    }
}
}
