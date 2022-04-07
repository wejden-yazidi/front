import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompteRoutingModule } from './compte-routing.module';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { AjouterCompteComponent } from './ajouter-compte/ajouter-compte.component';
import { TreeModule } from 'primeng/tree';

@NgModule({
  declarations: [
 
    ListCompteComponent,
      AjouterCompteComponent
  ],
  imports: [CompteRoutingModule,TreeModule,
  FormsModule,CommonModule],
  providers:[]
})
export class CompteModule { }
