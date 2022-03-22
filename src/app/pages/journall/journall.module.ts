import { CommonModule } from '@angular/common';
import {  NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JournallRoutingModule } from './journall-routing.module';
import { ListJournallComponent } from './list-journall/list-journall.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    ListJournallComponent,  
  ],
  imports: [JournallRoutingModule,
  FormsModule,CommonModule,TableModule],
  providers:[]
})
export class JournallModule { }
