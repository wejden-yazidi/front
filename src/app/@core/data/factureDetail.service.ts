import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DetailFacture } from "../data/DetailFacture";
import { Facture } from "../data/Facture";

@Injectable({
  providedIn: "root",
})
export class FactureDetailService {
  urlGetajouterFactureavecDetails =
    "http://localhost:8080/api/ajouterFactureavecDetails/";

  urlGetAllFacture = "http://localhost:8080/api/getAllFacture";
  urlGetOneFacture = "http://localhost:8080/api/getOneFacture";
  urlCreateFacture = "http://localhost:8080/api/ajoutFacture";
  urlUpdateFacture = "http://localhost:8080/api/updateFacture";
  urlDeleteFacture = "http://localhost:8080/api/deleteFacture";
  urlGetDetailsByIdFacture = "http://localhost:8080/api/getDetailsByIdFacture/";
  constructor(private httpFacture: HttpClient) {}

  create(Facture: Facture) {
    return this.httpFacture.post(this.urlCreateFacture, Facture);
  }
  ajouterFactureavecDetails(id: String, LesdetailsFacture: DetailFacture[]) {
    return this.httpFacture.post(
      this.urlGetajouterFactureavecDetails + id,
      LesdetailsFacture
    );
  }

  getAllFacture() {
    return this.httpFacture.get<Facture[]>(this.urlGetAllFacture);
  }

  update(id: string, Facture: Facture) {
    return this.httpFacture.put(`${this.urlUpdateFacture}/${id}`, Facture);
  }
  delete(id: string) {
    return this.httpFacture.delete(`${this.urlDeleteFacture}/${id}`);
  }
  getFactureId(id: string) {
    return this.httpFacture.get<Facture>(`${this.urlGetOneFacture}/${id}`);
  }
  getDetailsByIdFacture(id: string) {
    return this.httpFacture.get<any[]>(this.urlGetDetailsByIdFacture + id);
  }
}
