import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-ajouter-compte',
  templateUrl: './ajouter-compte.component.html',
  styleUrls: ['./ajouter-compte.component.scss']
})
export class AjouterCompteComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  annuler(){
    this.router.navigate(["/pages/compte/compte"])
  }
}
