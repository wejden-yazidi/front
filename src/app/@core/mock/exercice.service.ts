import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercice } from '../data/Exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
   urlGetAllJournal='http://localhost:8090/api/v1/getAllExercice';
   urlGetOneAllJournal='http://localhost:8090/api/v1/getOneExercice/{id}';
   urlCreateExercice='http://localhost:8090/api/v1/createExercice';
   urlUpdateExercice='http://localhost:8090/api/v1/updateExercice/{id}';
   urlDeleteExercice='http://localhost:8090/api/v1/deleteExercice/{id}';
   constructor(private httpExercice:HttpClient) { }

   getAllExercice(){
    return this.httpExercice.get<Exercice[]>(this.urlGetAllJournal);
  }
createExercice(exercice: Exercice) {
  return this.httpExercice.post(this.urlCreateExercice, exercice);
}
updateExercice(id: string, data: any) {
  return this.httpExercice.put(`${this.urlUpdateExercice}/${id}`, data);
}
deleteExercice(id: string) {
  return this.httpExercice.delete(`${this.urlDeleteExercice}/${id}`);
}

  }