import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Fournisseur } from "../data/Fournisseur";

@Injectable({
  providedIn: "root",
})
export class FournisseurService {
  urlGetAllFournisseur = "http://localhost:8080/api/getAllFournisseur";
  urlGetOneFournisseur = "http://localhost:8080/api/getOneFournisseur";
  urlCreateFournisseur = "http://localhost:8080/api/createFournisseur";
  urlUpdateFournisseur = "http://localhost:8080/api/updateFournisseur";
  urlDeleteFournisseur = "http://localhost:8080/api/deleteFournisseur";
  constructor(private httpFournisseur: HttpClient) {}

  getAllFournisseur() {
    return this.httpFournisseur.get<Fournisseur[]>(this.urlGetAllFournisseur);
  }
  create(fournisseur: Fournisseur) {
    return this.httpFournisseur.post(this.urlCreateFournisseur, fournisseur);
  }
  update(id: string, fournisseur: Fournisseur) {
    return this.httpFournisseur.put(
      `${this.urlUpdateFournisseur}/${id}`,
      fournisseur
    );
  }
  delete(id: string) {
    return this.httpFournisseur.delete(`${this.urlDeleteFournisseur}/${id}`);
  }
  getFournisseurId(id: string) {
    return this.httpFournisseur.get<Fournisseur>(
      `${this.urlGetOneFournisseur}/${id}`
    );
  }
}
