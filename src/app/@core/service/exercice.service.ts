import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Exercice } from '../data/Exercice';

@Injectable({
  providedIn: 'root'
})
export class ExerciceService {
   urlGetAllJournal='http://localhost:8080/api/getAllExercice';
   urlGetOneAllJournal='http://localhost:8080/api/getOneExercice';
   urlCreateExercice='http://localhost:8080/api/createExercice';
   urlUpdateExercice='http://localhost:8080/api/updateExercice';
   urlDeleteExercice='http://localhost:8080/api/deleteExercice';
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