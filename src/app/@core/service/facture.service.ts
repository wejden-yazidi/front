import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Facture } from '../data/Facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
   urlGetajouterFactureavecDetails='http://localhost:8080/api/ajouterFactureavecDetails/';
  
   urlGetAllFacture='http://localhost:8080/api/getAllFacture';
   urlGetOneFacture='http://localhost:8080/api/getOneFacture';
   urlCreateFacture='http://localhost:8080/api/ajoutFacture';
   urlUpdateFacture='http://localhost:8080/api/updateFacture';
   urlDeleteFacture='http://localhost:8080/api/deleteFacture';
   constructor(private httpFacture:HttpClient) { }



   create(Facture:Facture) {
    return this.httpFacture.post(this.urlCreateFacture,Facture);
  }
   ajouterFactureavecDetails(id:String) {
    return this.httpFacture.post(this.urlCreateFacture,Facture);
  }


  
getAllFacture(){
    return this.httpFacture.get<Facture[]>(this.urlGetAllFacture);
  }

update(id: string, Facture: Facture) {
  return this.httpFacture.put(`${this.urlUpdateFacture}/${id}`, Facture);
}
delete(id: string) {
  return this.httpFacture.delete(`${this.urlDeleteFacture}/${id}`);
}
getFactureId(id:string){
  return this.httpFacture.get<Facture>(`${this.urlGetOneFacture}/${id}`);
}
  }