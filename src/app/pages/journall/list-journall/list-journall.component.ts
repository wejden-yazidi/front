import { Component, OnInit } from '@angular/core';
import { Journall } from '../../../@core/data/Journall';
import { JournallService } from '../../../@core/mock/journall.service';

@Component({
  selector: 'ngx-list-journall',
  templateUrl: './list-journall.component.html',
  styleUrls: ['./list-journall.component.scss']
})
export class ListJournallComponent implements OnInit {
listJournall:Journall[];
  constructor( private JournallService:JournallService) { }


  ngOnInit(): void {
    this.JournallService.getAllJournall().subscribe(data=>{
      this.listJournall=data;
      console.log(this.listJournall)
    })
  }

}
