import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Journall } from '../data/Journall';

@Injectable({
  providedIn: 'root'
})
export class JournallService {
   urlGetAllJournal='http://localhost:8090/api/v1/getAllJournall';
   urlGetOneAllJournal='http://localhost:8090/api/v1/getOneJournall/{id}';
   urlCreateJournall='http://localhost:8090/api/v1/createJournall';
   urlUpdateJournall='http://localhost:8090/api/v1/updateJournall/{id}';
   urlDeleteJournall='http://localhost:8090/api/v1/deletejournall/{id}';
   constructor(private httpJournall:HttpClient) { }

   getAllJournall(){
    return this.httpJournall.get<Journall[]>(this.urlGetAllJournal);
  }
create(journall : Journall) {
  return this.httpJournall.post(this.urlCreateJournall, journall);
}
update(id: any, data: any) {
  return this.httpJournall.put(`${this.urlUpdateJournall}/${id}`, data);
}
delete(id: any) {
  return this.httpJournall.delete(`${this.urlDeleteJournall}/${id}`);
}

  }