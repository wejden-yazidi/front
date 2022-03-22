import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compte } from '../data/Compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {
   urlGetAllJournal='http://localhost:8090/api/v1/getAllCompte';
   urlGetOneAllJournal='http://localhost:8090/api/v1/getOneCompte/{id}';
   urlCreateCompte='http://localhost:8090/api/v1/createCompte';
   urlUpdateCompte='http://localhost:8090/api/v1/updateCompte/{id}';
   urlDeleteCompte='http://localhost:8090/api/v1/deleteCompte/{id}';
   constructor(private httpCompte:HttpClient) { }

   getAllCompte(){
    return this.httpCompte.get<Compte[]>(this.urlGetAllJournal);
  }
createCompte(compte: Compte) {
  return this.httpCompte.post(this.urlCreateCompte, compte);
}
updateCompte(id: string, data: any) {
  return this.httpCompte.put(`${this.urlUpdateCompte}/${id}`, data);
}
deleteCompte(id: string) {
  return this.httpCompte.delete(`${this.urlDeleteCompte}/${id}`);
}

  }