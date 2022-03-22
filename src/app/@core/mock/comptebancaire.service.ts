import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompteBancaire } from '../data/CompteBancaire';

@Injectable({
  providedIn: 'root'
})
export class CompteBancaireService {
   urlGetAllJournal='http://localhost:8090/api/v1/getAllCompteBancaire';
   urlCreateCompteBancaire='http://localhost:8090/api/v1/createCompteBancaire';
   urlUpdateCompteBancaire='http://localhost:8090/api/v1/updateCompteBancaire/{id}';
   urlDeleteCompteBancaire='http://localhost:8090/api/v1/deleteCompteBancaire/{id}';
   constructor(private httpCompteBancaire:HttpClient) { }

   getAllCompteBancaire(){
    return this.httpCompteBancaire.get<CompteBancaire[]>(this.urlGetAllJournal);
  }
createCompteBancaire(compteBancaire: CompteBancaire) {
  return this.httpCompteBancaire.post(this.urlCreateCompteBancaire, compteBancaire);
}
updateCompteBancaire(id: string, data: any) {
  return this.httpCompteBancaire.put(`${this.urlUpdateCompteBancaire}/${id}`, data);
}
deleteCompteBancaire(id: string) {
  return this.httpCompteBancaire.delete(`${this.urlDeleteCompteBancaire}/${id}`);
}

  }