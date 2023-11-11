import { Journall } from "./Journall";

export class CompteBancaire {
  id: string;
  isActif: boolean;
  code: string;
  numCompte: number;
  Journal: Journall[];
  idFournisseur: string;
  nomFournisseur: string;
}
