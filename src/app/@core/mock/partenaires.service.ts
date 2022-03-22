import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Partenaires } from "../data/Partenaires";

@Injectable({
  providedIn: "root",
})
export class PartenairesService {
  partners: Partenaires[];
  deletePartnerUrl = "http://localhost:8090/twinslabs/tn/deletePartenaire/";
  UrlListpartenaires = "http://localhost:8090/twinslabs/tn/allPartenaires";
  UrlNbrePartenairesEachDate =
    "http://localhost:8090/twinslabs/tn/NbrPartnersByDate";
  UrlPostPartenaire = "http://localhost:8090/twinslabs/tn/addPartenaire";
  UrlNbrPartenaire = "http://localhost:8090/twinslabs/tn/Nbr";
  UrlBlockpartner = "http://localhost:8090/twinslabs/tn/disablePartenaire";
  addPartnerUrl = "http://localhost:8090/twinslabs/tn/addPartenaire";
  getOnePartnerUrl = "http://localhost:8090/twinslabs/tn/getOne/";
  UrlUpdatePartner = "http://localhost:8090/twinslabs/tn/updatePartenaire/";
  UrlGetProducts = "http://localhost:8090/twinslabs/tn/allProducts";
  constructor(private httpPartenaire: HttpClient) {}

  getTheAllpartners() {
    return this.httpPartenaire.get<Partenaires[]>(this.UrlListpartenaires);
  }
}
