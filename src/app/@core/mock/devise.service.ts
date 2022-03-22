import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Devise } from '../data/Devise';

@Injectable({
  providedIn: 'root'
})
export class DeviseService {
   urlGetAllDevise='http://localhost:8090/api/v1/getAllDevise';
   urlCreateDevise='http://localhost:8090/api/v1/createDevise';
   urlUpdateDevise='http://localhost:8090/api/v1/updateDevise/{id}';
   urlDeleteDevise='http://localhost:8090/api/v1/deleteDevise/{id}';
   constructor(private httpDevise:HttpClient) { }

   getAllDevise(){
    return this.httpDevise.get<Devise[]>(this.urlGetAllDevise);
  }
createDevise(Devise: Devise) {
  return this.httpDevise.post(this.urlCreateDevise, Devise);
}
updateDevise(id: string, data: any) {
  return this.httpDevise.put(`${this.urlUpdateDevise}/${id}`, data);
}
deleteDevise(id: string) {
  return this.httpDevise.delete(`${this.urlDeleteDevise}/${id}`);
}

  }