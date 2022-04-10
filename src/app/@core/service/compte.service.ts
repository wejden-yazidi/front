import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../data/Compte';

import {TreeNode} from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
   urlGetAllCompte='api/getAllAcounts';
   urlGetOneAllCompte='api/getOneCompte';
   urlCreateCompte='api/createCompte';
   urlUpdateCompte='api/updateCompte';
   urlDeleteCompte='api/deleteCompte';
   urlGetParents="api/getParents";
   constructor(private httpCompte:HttpClient) {   
 }


getAllCompte(){
  return this.httpCompte.get<any>(this.urlGetAllCompte);
}



// public loadNodes(id:String | undefined){
//   if(!id){
//     id='All'; 
//   }
//    return this.httpCompte.get<Compte[]>(this.urlGetAllCompte);
//   }
createCompte(compte: Compte) {
  return this.httpCompte.post(this.urlCreateCompte, compte);
}
updateCompte(id: string, data: any) {
  return this.httpCompte.put(`${this.urlUpdateCompte}/${id}`, data);
}
deleteCompte(id: string) {
  return this.httpCompte.delete(`${this.urlDeleteCompte}/${id}`);
}
getParents(){
  return this.httpCompte.get(this.urlGetParents);
}
getFiles() {
  return this.httpCompte.get<any>(this.urlGetParents)
    .toPromise()
    .then(res => <TreeNode[]>res);
  }


public getJSON(): Observable<any> {
    return this.httpCompte.get("./assets/data.json");
}
}
 
// getJSON(): Observable<any>{ return this.httpCompte.get("C:\Users\dell\Desktop\dashboard-frontal\src\assets\data.json").forEach((res:any) => res.json()) .catch((error:any) => console.log(error)); }
// }