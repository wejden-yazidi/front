import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Journall } from "../data/Journall";

@Injectable({
  providedIn: "root",
})
export class JournallService {
  urlGetAllJournal = "http://localhost:8080/api/getAllJournall";
  urlGetOneJournal = "http://localhost:8080/api/getOneJournall";
  urlCreateJournall = "http://localhost:8080/api/createJournall";
  urlUpdateJournall = "http://localhost:8080/api/updateJournall";
  urlDeleteJournall = "http://localhost:8080/api/deleteJournall";
  constructor(private httpJournall: HttpClient) {}

  getAllJournall() {
    return this.httpJournall.get<Journall[]>(this.urlGetAllJournal);
  }
  create(journall: Journall) {
    return this.httpJournall.post(this.urlCreateJournall, journall);
  }
  update(id: string, journall: Journall) {
    return this.httpJournall.put(`${this.urlUpdateJournall}/${id}`, journall);
  }
  delete(id: string) {
    return this.httpJournall.delete(`${this.urlDeleteJournall}/${id}`);
  }
  getJournallId(id: string) {
    return this.httpJournall.get<Journall>(`${this.urlGetOneJournal}/${id}`);
  }
}
