import { Component, OnInit } from '@angular/core';
import { TreeNode} from 'primeng/api';
import { CompteService } from '../../../@core/service/compte.service';
import { Compte } from '../../../@core/data/Compte';

@Component({
  selector: 'ngx-list-compte',
  templateUrl: './list-compte.component.html',
  styleUrls: ['./list-compte.component.scss']
})
export class ListCompteComponent implements OnInit {
//   treeItems: TreeNode[] = [];
//   loading = false;
//   selectedFile: TreeNode;
//     items: MenuItem[];
//     comptes:Compte[];
//     map:any
//     docs:any[]=[]
// stringIds:string[]=[]
files: TreeNode[];
compte:any;
    cols: Compte[]
    files2: TreeNode[];

  constructor(private CompteService:CompteService) { 
  }

  ngOnInit(): void {
    // this.getjson();

    // this.CompteService.loadNodes.then(files => this.files = files);
    this.CompteService.getJSON().toPromise().then(files => this.files = files);
    // .subscribe(data => {
    //   console.log(data);
   
  }
  expandAll(){
    this.files2.forEach( node => {
        this.expandRecursive(node, true);
    } );
}

collapseAll(){
    this.files2.forEach( node => {
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


  //    this.CompteService.getParents().subscribe(files => {
  //     var map=Object.entries(files);
  //     //console.log(map)
  //  for (let i=0;i<map.length;i++){
  //     console.log(map[i][0])
  //     this.stringIds.push(map[i][0])

  //  }
  //  console.log( this.stringIds)

  //  this.stringIds.forEach(element => {
  //   this.docs.push({label:{
  //     element
  //   },children:[{label:this.comptes , leaf :this.comptes  , ...this.comptes}
      
  //   ]})
  //   console.log(this.docs)
  //  });
   

    
  //     });
     // this.CompteService.getFiles().then(data=>{
      //  console.log(data)

      //  this.treeItems=data
      //})
    
 
  //   this.items = [
  //     {label: 'View', icon: 'pi pi-search', command: (event) => this.viewFile(this.selectedFile)},
  //     {label: 'Unselect', icon: 'pi pi-times', command: (event) => this.unselectFile()}
  // ];

// private loadTree(id:string | undefined=undefined){
// this.loading=true;
// return this.CompteService.loadNodes(id).pipe(
//   map(Response =>  Response.map(this.Compte => { 
//      return{ label :Compte.numCompte , leaf :Compte.isActif === 'v' , ...this.Compte};
//     })),
//     taps(items=>{this.loading= false ;
//     })
//     );
//   }
// getjson() {

//   this.CompteService.getJSON().then(
//     (data) => {
//       console.log(data);
//       this.compte = data;
//     },
//     errors => {
//       console.log(errors);
//       alert(errors.status);
//     },
//   );
// }













// viewFile(file: TreeNode) {
//   this.CompteService.getAllCompte({severity: 'info', summary: 'Node Details', detail: file.label});
// }

// unselectFile() {
//   this.selectedFile = null;
// }
// private expandRecursive(node:TreeNode, isExpand:boolean){
//   node.expanded = isExpand;
//   if (node.children){
//       node.children.forEach( childNode => {
//           this.expandRecursive(childNode, isExpand);
//       } );
//   }

