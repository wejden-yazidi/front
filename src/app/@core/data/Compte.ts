export class Compte {
  id: string;
  isActif: boolean = true;
  idParent: string = "0";
  numCompte: number;
  dateCreation: Date;
  children: [];
}
