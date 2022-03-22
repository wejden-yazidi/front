import { Journall } from "./Journall";

export class Compte{
    id:string;
    isActif:boolean;
    idParent:string;
    numCompte:number;
    dateCreation:Date;
    Journal:Journall[];

}
